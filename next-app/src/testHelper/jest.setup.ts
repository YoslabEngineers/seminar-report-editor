import prisma from '@/lib/prisma/client'
import { PrismaPromise } from '@prisma/client'

// beforeAll(() => {
//   // TODO: beforeAllでUserの初期化を行う
// })

afterAll(async () => {
  // Reportテーブルのクリーンアップ
  const transactions: PrismaPromise<any>[] = []
  transactions.push(prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0;`)
  transactions.push(prisma.$executeRawUnsafe(`TRUNCATE Reports;`))
  transactions.push(prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1;`)

  try {
    await prisma.$transaction(transactions)
  } catch (error) {
    console.log({ error })
  }
})
