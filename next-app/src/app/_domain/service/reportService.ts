import { Report } from '@/app/_domain/model/report'
import { User } from '@/app/_domain/model/user'
import { Position } from '@/type/position';
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
 * UserのDomain Objectを作成する
 * @param name 
 * @param position 
 * @param studentId 
 * @returns 
 */
export function createUser(
  name: string,
  position: Position,
  studentId: string
) {

  if (studentId === null) {
    throw new Error('Student ID is required.')
  }

  return new User(name, position, studentId)
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
