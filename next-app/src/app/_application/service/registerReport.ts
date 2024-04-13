// アプリケーション層
import { createReport, saveReport } from '@/app/_domain/service/reportService'
import { createUser } from '@/app/_domain/service/userService'
import { User } from '@/app/_domain/model/user'
import { Position } from '@/type/position'
import { Report } from '@/app/_domain/model/report'

type RegisterNewReportRequest = {
  title: string
  seminarDate: Date
  reportNumber: number
  pageNumber: number
  totalPages: number
  content: string
  isSubmitted: boolean
  studentId: string
}

/**
 * 新しいReportを登録する
 * @param request
 * @returns
 */
export function registerNewReport(request: RegisterNewReportRequest) {
  let report: Report
  let author: User

  // Userドメインオブジェクトを作成(後でドメインサービスに移動する)
  // TODO: studentIdからUserドメインオブジェクトを取得する
  try {
    author = createUser('Sample User Name', 'B3' as Position, request.studentId)
  } catch (e) {
    if (e instanceof Error && e.message == 'Student ID must be less than 8 characters.') {
      return e.message
    } else {
      throw e
    }
  }

  // ドメインサービスを呼び出し、リクエストデータを基にレポートのドメインオブジェクトを取得する
  try {
    report = createReport({ ...request, author })
  } catch (e) {
    if (e instanceof Error && e.message == 'Author is required.') {
      return e.message
    } else {
      throw e
    }
  }

  // ドメインサービスを呼び出し、取得したドメインオブジェクトの保存を依頼する
  const res = saveReport(report)

  // TODO: 成功/失敗を返す
  return res
}