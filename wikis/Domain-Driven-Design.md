# ゼミレポエディタのドメインルールとは？

## ドメイン駆動 ish 開発で進めよう

> ドメイン駆動開発 = DDD

開発者全員で共通の認識を持って実装していきたい

完全な DDD はまだ難しい →ish(っぽい)

## ドメインを考えよう

> ドメイン: そのシステムに関わる基本的な概念、知識

### 「ゼミレポ」に必要なドメインとは？

とりあえず「ユーザ」と「レポート」かな

### ユーザドメインって？

ユーザが持つ値(フィールド)は？

- 名前
- 学生番号
- 学年

本当にこれだけ？

- （認証のためにも）メールアドレスはあるべきかも
  - 各ユーザがアドレスを持つことは自然

フィールドの制約は？

- 名前
  - 長さは人による
  - 日本語・英語・中国語の可能性もある
  - 任意の文字列(string)で良さげ
- 学生番号
  - Number で本当に良いか？長さは決まってる？
  - 今年入学からアルファベットが入った → string では？？
  - 現状のゼミレポシステムは学生番号に加えて、4444(英語ゼミ用)や 1(先生用)もある ← 制約無さ過ぎヤバ w
  - 今回作るのゼミレポエディタでは「8 文字の文字列」で良さそう
  - そもそも学生番号は StudentNumber より UserId として考えた方が良いかも
- メールアドレス
  - \*\*\*@wakayama-u.ac.jp で

### レポートドメインって？

レポートドメインの持つ値(フィールド)と制約(ルール)は？

- タイトル
  - 任意の文字列
  - 長すぎるとレイアウトが崩壊するからある程度制限あってもいいかも
- 著者名・学年
  - ユーザ情報そのもの
  - User<Name>と User<Position> 良さげ
- レポート番号
  - 流石に Number
  - 自動インクリメント
- そのゼミレポが通算何ページ目か(ゼミレポ 1 ページ目のページ数)
  - Number
  - システム側が設定
- そのゼミレポ単体の合計ページ
  - Nuber
  - システム側が設定
- 発表日(ゼミの日)
  - Date
- ゼミレポの内容
  - string
  - マークダウン記法の文字列
- 提出済みかどうか
  - 元々「下書き状態」か「完成状態」かで考えてたけど、「提出済みか」の boolean で良いのでは？
  - 「提出済み」から戻ることは無いのでは？(不可逆性)

## 「ドメインサービス」と「アプリケーションサービス」を考えよう

> 後述を前提に一旦細かいことを考えずに

- 「ドメインサービス」はドメインに対する処理
- 「アプリケーションサービス」はユーザが起こす操作(ユースケース)
  - 「ドメインサービス」は「アプリケーションサービス」に呼び出される

### アプリケーションサービス

- サインアップ/サインイン/サインアウト
- ユーザ名の変更
  > 家庭の事情とかあるかもしれないじゃん？
- 学年の変更
- レポートの新規作成
- レポートの閲覧
  - 対象となるレポートが提出済みかはユースケースに影響しない
- 過去のレポート一覧を確認
- レポートの編集
- レポートの削除(← 不要？)
- レポートの提出(=PDF 化)

### ドメインサービス

ユーザ関連

- ユーザの新規登録(サインアップ)
- ユーザの認証処理(サインイン/サインアウト)
- ユーザ名の更新(変更)
- ユーザの学年の更新(変更)

レポート関連

- そのゼミレポが通算何ページ目か取得・設定
- そのゼミレポ単体の合計ページ数の設定
- レポートの PDF 化
- レポートを提出済みにする

## 【改めて】ドメインサービスを考えよう

やろうと思えばドメインに対する処理は何でもサービス側に書けてしまう

これを「ドメイン欠乏症」という

### ドメインが持つ特性としての処理はドメインにロジックをもたせるべき

例）学年の更新
学年の更新はそのユーザだけに影響範囲がとどまる

```ts
user = new User();
user.updatePosition(M2);
```

という流れで問題なさそう

逆にそれ以外の特性、ドメイン自身が持つと不自然な処理はサービスに持たせるべき

例）ユーザの認証
ユーザの認証ロジックをドメインが持つとどうなるか？

```ts
user = new User(); // 認証のためにUserインスタンスを生成。これは存在していいのか？
user.auth(id, password); // 認証を呼び出す
```

もし認証が通らなかったら user は存在しないということになる

→ インスタンスを破棄する？？そもそも最初に生成したのが間違いかも？

ドメインサービスがロジックを持つと？

```ts
//認証成功で `User`インスタンス、失敗でエラーを返すようにする
user = UserService.auth(id, pass); // 認証を呼び出し
```

とても自然な動き

つまり、**ユーザは自分自身を証明出来ない**

- ある外部の動き(サービス)によっては自己を証明してもらう必要がある
- 認証処理はサービスが持つべき

もちろん一部例外もある

ドメイン側がロジックを持つことは可能だが、現実的な振舞としてサービスが行う方が自然に見えるロジックもある

重要なのは 開発者(+利用者)の間で共通の認識が持てる概念・ロジックを定義し、その意識を共有すること

### 今回最終的に定義したドメインルール(一部改変)

テキトーな class を書いてみる(このままでは当然動かない)

> 返り値の例外処理、詳細な値オブジェクトは省略

```ts
class User {
  /*
   * 学生番号(ex: s2360001, 60236001...)
   * 8文字以下のstring
   * 登録/認証でインスタンス生成以降不変なため、readonly
   **/
  readonly id: UserId

  /*
   * 氏名
   * position: B1〜B4|M1,2|D1〜3|R|Lab
   * 学年および留学生・先生のカテゴリ
   **/
  name: String

  /*
   * 有効なメールアドレス(ex: abc@wakayama-u.ac.jp)
   * 留学生は和大アドレス無いかも？
   * インスタンス生成以降不変
   **/
  readonly email: MailAddress

  /*
   * 作成日
   * DBテーブルのみ？
   **/
  created_at: Date

  /*
   * 更新日
   * DBテーブルのみ？
   **/
  updated_at: Date

  /*
   * ユーザ名更新
   * @param newName: String
   * @return void
   **/
  void updateName( newName )

  /*
   * 学年更新
   * @param newPosition: Position
   **/
  void updatePosition( newPosition )
}
```

```ts
class UserService{
  /*
   * ユーザ新規登録
   * @param newUser: User
   **/
  User createUser( User ){
    // 重複チェック(アカウント作成済みか確認)など
  }

  /*
   * ユーザ認証
   * @param id: UserId
   * @param password: Password
   **/
  User auth(id, password)
}
```

```ts
class Report{
  /*
   * レポート固有id
   **/
  readonly id: Number

  /*
   * 著者
   * name と position を使う
   * レポート作成(インスタンス生成)時点から不変
   **/
  readonly author: User

  /*
   * レポートタイトル
   * 任意の文字列(文字列長の制限はUI上でかけてもいいかも)
   **/
  title: String

  /*
   * レポート提出日(ゼミ実施日)
   * default=作成日
   * レポート作成時点から不変
   **/
  submittedDate: Date

  /*
   * レポート番号
   * 通算何個目のレポートか
   * レポート作成時点から不変
   **/
  readonly reportNumber: Number

  /*
   * レポートの開始ページ数
   * レポート作成時点から不変
   * 通算ページ数+1、タイトルページ右上にあるページ数
   * インスタンス生成以降不変
   * 害悪変数
   **/
  readonly startPage: Number

  /*
   * レポートの合計ページ数
   * default= 1
   * (startPageさえなければ無くても良い変数では？:thinking_face:)
   **/
  totalPages: Number

  /*
   * レポートの内容
   * マークダウン形式の文字列
   **/
  contents: string

  /*
   * レポート提出済みか
   * default=false
   * 不可逆
   **/
  isSubmitted: boolean

  /*
   * DBにあるレポート数を取得 +1 をreportNumberに設定
   **/
  void setReportNumber()

  /*
   * DBにあるレポートのtotalPagesの合算を取得 +1 をstartPageに設定
   **/
  void setStartPage()

  /*
   * contentsが増えたときにA4用紙何ページ分かtotalPagesに設定
   **/
  void setTotalPages() {
    // これをどうやって実装するかまだ不明瞭
  }

  /*
   * レポートのPDF化
   **/
  void setSubmit() {
    // PDF化時にisSubmit=trueにする
    // 不可逆性を持つためfalseにする処理を実装しない
  }

  /*
   * PDFのファイル名を返す便利系関数
   **/
  string fileName() {
    return `${this.reportNumber}_${this.title}` // みたいな
  }
}
```

```ts
class ReportService{
  /*
   * レポート新規作成
   * @param author: User
   * @param title: String
   * @param contents: String
   * @param submittedDate: Date
   **/
  Report createReport(author, title, contents, submittedDate)

  /*
   * ユーザに紐づくレポートを取得
   * @param author: User
   * @param reportId?: Number reportIdを指定で単一取得、指定無しで全取得 とか？
   **/
  Report[] getReports(user, reportId?)

  /*
   * レポートのPDF化(+ 現行ゼミレポシステムに送信)
   * @param report: Report
   * @param title?: String
   * @param contents?: String
   * @param submittedDate?: Date
   **/
void submit(report) {
  // 色々やってから
  report.setSubmit()
}
```

ApplicationService(分割予定)

- サインアップ/サインイン/サインアウト
- ユーザ情報編集
- レポート新規作成
- レポート閲覧
- レポート編集
- レポート提出(エクスポート)

# Repository
> ドメインオブジェクトを永続化させるためのもの、DBとの疎通を担う。
- DB設計は必ずしもドメインオブジェクトの構造に一致させる必要はない
  - テーブル定義や取得先も変更されるかもしれない。
- 責務を分ける
  - アプリケーション側のドメイン管理はService
  - DBのCRUD処理をRepository

## テーブル設計
- users	
  - id: unique key, auto increment
	- name: text
  - position: text
  - mail_address: text
  - created_at: date, auto
  - updated_at: date, auto
- reports
	- id: unique key, auto increment
  - title: text
  - author_id: int
  - contents: text
  - start_page: int
  - total_pages: int
  - submitted_at: date
  - created_at: date
  - updated_at: date

## Repository
- findUser
- createUser
- updateUser
- findReport
- createReport
- updateReport


これで大枠の設計はいいが今後も適宜修正を加えていく可能性はある
