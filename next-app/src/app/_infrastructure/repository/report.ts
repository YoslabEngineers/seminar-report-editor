import { PrismaClient } from '@prisma/client'
import { Report } from '@/app/_domain/model/report'
import { ReportResource } from '../../_domain/service/reportService'
import { reportFactory } from '../factory/report'
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

/**
 * Reportを登録する
 * @param report
 */
export async function insertReport(report: ReportResource) {
  const title = report.title
  const seminarDate = report.seminarDate
  const reportNumber = report.reportNumber
  const pageNumber = report.pageNumber
  const totalPages = report.totalPages
  const content = report.content
  const author = report.author

  try {
    const reportRow = await prisma.reports.create({
      data: {
        title: title,
        seminar_date: seminarDate,
        report_num: reportNumber,
        page_num: pageNumber,
        total_pages: totalPages,
        contents_url: content,
      },
    })

    return reportFactory({...reportRow, author: author})
  } catch (e) {
    console.error(e)
    throw new Error('Prisma Error')
  }
}
