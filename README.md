# ゼミレポエディター

## これは何？

- 某研究室のゼミレポートを執筆するための Web エディター
- 通算・個別のページ数などを自動で管理し、MD 記法により統一性のあるレポートを作成できる

## 起動方法
cloneしたときの初回のみ，
```sh
docker-compose build
docker-compose run next-app yarn install
```

起動時には，
```sh
docker-compose up -d
```
