// アプリケーション層
import { createReport, saveReport } from '@/app/_domain/service/reportService'
import { Report } from '@/app/_domain/model/report'
import { User } from '@/app/_domain/model/user'
import { Position } from '@/type/position'

export function registerNewReport() {
  // 引数にエンドポイントへ渡ってきたリクエストデータを受け取る
  // 想定引数
  const title = 'リポジトリ層からのそうにゅう'
  const seminarDate = new Date('2021-01-01')
  const reportNumber = 1
  const pageNumber = 1
  const totalPages = 1
  const content = 'sample path'
  const isSubmitted = false

  // Userドメインオブジェクトを作成(後でドメインサービスに移動する)
  const name = 'sample name'
  const position: Position = 'B3'
  const studentId = 's001'
  const author = new User(name, position, studentId)

  // ドメインサービスを呼び出し、リクエストデータを基にレポートのドメインオブジェクトを取得する
  const report = createReport(isSubmitted, title, seminarDate, author, reportNumber, pageNumber, totalPages, content)

  // ドメインサービスを呼び出し、取得したドメインオブジェクトの保存を依頼する
  const res = saveReport(report)

  // TODO: 成功/失敗を返す
  return res
}
