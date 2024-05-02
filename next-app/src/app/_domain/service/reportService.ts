import { Report } from '@/app/_domain/model/report'
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
  if (resource.author === null) {
    throw new Error('Author is required.')
  }

  const res = await insertReport(resource)

  return new Report(res)
}
