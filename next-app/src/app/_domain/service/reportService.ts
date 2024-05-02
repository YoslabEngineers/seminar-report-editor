import { User } from '@/app/_domain/model/user'
import { insertReport } from '@/app/_infrastructure/repository/report'

export type ReportResource = {
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
export async function createReport(resource: ReportResource) {
  if (resource.title.length > 30) {
    throw new Error('too long report title')
  }

  const report = await insertReport(resource)

  return report
}
