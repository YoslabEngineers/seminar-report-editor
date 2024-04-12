import { PrismaClient } from '@prisma/client'
import { Report } from '@/app/_domain/model/report'
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
export async function insertReport(report: Report) {

  const title = report.getTitle()
  const seminarDate = report.getSeminarDate()
  const reportNumber = report.getReportNumber()
  const pageNumber = report.getPageNumber()
  const totalPages = report.getTotalPages()
  const content = report.getContent()
  const author = report.getAuthor()

  try {
    const report = await prisma.reports.create({
      data: {
        title: title,
        seminar_date: seminarDate,
        report_num: reportNumber,
        page_num: pageNumber,
        total_pages: totalPages,
        contents_url: content,
      },
    })
    return report
  } catch (e) {
    console.error(e)
    return e
  }

}