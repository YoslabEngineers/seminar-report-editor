## Prisma

DBの構造へ変更があったときにprismaで型生成を行う．

- [ドキュメント](https://www.prisma.io/docs/getting-started)

DBの内容からprismaのSchemaの作成

```sh
npx prisma db pull --schema=./src/lib/prisma/schema.prisma
```

SchemaからPrismaの型生成

```sh
npx prisma generate --schema=./src/lib/prisma/schema.prisma
```
