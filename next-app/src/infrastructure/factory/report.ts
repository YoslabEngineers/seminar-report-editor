import { Report } from '@/domain/model/report'
import type { Prisma } from '@prisma/client'
import prisma from '@/lib/prisma/client'
import { User } from '@/domain/model/user'

export const reportFactory = (reportRow: Prisma.PromiseReturnType<typeof prisma.reports.create>, author: User) => {
  // TODO: tableにnullが入らないようにする
  return new Report({
    id: reportRow.id,
    title: reportRow.title ?? '',
    author: author,
    seminarDate: reportRow.seminar_date ?? new Date(),
    reportNumber: reportRow.report_num ?? 0,
    pageNumber: reportRow.page_num ?? 0,
    totalPages: reportRow.total_pages ?? 0,
    content: reportRow.contents_url ?? '',
    isSubmitted: reportRow.is_submitted ?? false,
  })
}
