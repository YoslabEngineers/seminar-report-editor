import { Report } from '@/app/_domain/model/report'
import { User } from '@/app/_domain/model/user'
import { insertReport } from '@/app/_repository/report'

type ReportResource = {
  title: string
  seminarDate: Date
  author: User
  reportNumber: number
  pageNumber: number
  totalPages: number
  content: string
  isSubmitted: boolean
}


/**
 * ReportのDomain Objectを作成する
 * @param resource 
 * @returns 
 */
export function createReport(resource: ReportResource) {

  if (resource.author === null) {
    throw new Error('Author is required.')
  }

  return new Report(resource)
}

/**
 * Reportを保存する
 * @param report 
 * @returns 
 */
export function saveReport(report: Report) {
  const res = insertReport(report)
  return res
}
