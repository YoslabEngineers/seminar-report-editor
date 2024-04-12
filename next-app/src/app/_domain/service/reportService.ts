import { Report } from '@/app/_domain/model/report'
import { User } from '@/app/_domain/model/user'
import { insertReport } from '@/app/_repository/report'

/**
 * ReportのDomain Objectを作成する
 * @param isSubmitted 
 * @param title 
 * @param seminarDate 
 * @param author 
 * @param reportNumber 
 * @param pageNumber 
 * @param totalPages 
 * @param content 
 * @returns 
 */
export function createReport(
  isSubmitted: boolean,
  title: string,
  seminarDate: Date,
  author: User,
  reportNumber: number,
  pageNumber: number,
  totalPages: number,
  content: string,
) {

  if (author === null) {
    throw new Error('Author is required.')
  }

  return new Report(isSubmitted, title, seminarDate, author, reportNumber, pageNumber, totalPages, content)
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
