import { Report } from '@/app/_domain/model/report'

export const reportFactory = (reportRow: any) => {
  return new Report(reportRow)
}
