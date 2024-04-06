import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
タイトルを指定してレポートを登録する
@param title
@returns
*/
export async function insertTest(title: string) {
  try {
    const report = await prisma.reports.create({
      data: {
        title: title,
      },
    })
    return report
  } catch (e) {
    console.error(e)
    return e
  }
}
