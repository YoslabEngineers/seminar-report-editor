import prisma from '@/lib/prisma/client'
import { PrismaPromise } from '@prisma/client'
import type { Prisma } from '@prisma/client'


export const setTable = async () => {
  // Usersテーブルに仮のデータの挿入
  const userInputData: Prisma.UsersCreateInput = {
    student_id: 's206000',
    name: 'Sample Name',
    position: 'B3',
    pass: 'password',
  }

  try {
    await prisma.users.create({
      data: userInputData,
    })
  } catch (error) {
    console.error(error)
  }
}

export const clearTable = async () => {
  // Reports・Usersテーブルのクリーンアップ
  const transactions: PrismaPromise<any>[] = []
  transactions.push(prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 0;`)
  transactions.push(prisma.$executeRawUnsafe(`TRUNCATE Reports;`))
  transactions.push(prisma.$executeRawUnsafe(`TRUNCATE Users;`))
  transactions.push(prisma.$executeRaw`SET FOREIGN_KEY_CHECKS = 1;`)

  try {
    await prisma.$transaction(transactions)
  } catch (error) {
    console.log({ error })
  }
}
