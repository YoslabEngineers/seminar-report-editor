import prisma from '@/lib/prisma/client'
import { ReportResource } from '@/domain/service/reportService'
import { reportFactory } from '@/infrastructure/factory/report'
import type { Prisma } from '@prisma/client'

/**
 * Reportを登録する
 * @param report
 */
export async function insertReport(report: ReportResource) {
  const reportInputData: Prisma.ReportsCreateInput = {
    title: report.title,
    seminar_date: report.seminarDate,
    report_num: report.reportNumber,
    page_num: report.pageNumber,
    total_pages: report.totalPages,
    contents_url: report.content,
    Users: {
      connect: { id: report.author.getId() },
    },
  }

  try {
    const reportRow = await prisma.reports.create({
      data: reportInputData,
    })

    return reportFactory(reportRow, report.author)
  } catch (e) {
    console.error(e)
    throw new Error('Prisma Error')
  }
}
