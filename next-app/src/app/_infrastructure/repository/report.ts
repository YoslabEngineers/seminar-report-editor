import prisma from '@/lib/prisma/client'
import { ReportResource } from '../../_domain/service/reportService'
import { reportFactory } from '../factory/report'
import type { Prisma } from '@prisma/client'

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
  const reportInputData: Prisma.reportsCreateInput = {
    title: report.title,
    seminar_date: report.seminarDate,
    report_num: report.reportNumber,
    page_num: report.pageNumber,
    total_pages: report.totalPages,
    contents_url: report.content,
    users: {
      connect: { id: report.author.getId() },
    },
  }


  try {
    const reportRow = await prisma.reports.create({
      data: reportInputData,
    })

    return reportFactory(reportRow,report.author)
  } catch (e) {
    console.error(e)
    throw new Error('Prisma Error')
  }
}
