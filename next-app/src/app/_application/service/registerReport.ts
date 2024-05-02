// アプリケーション層
import { createReport } from '@/app/_domain/service/reportService'
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
export async function registerNewReport(request: RegisterNewReportRequest) {
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
    const report = await createReport({ ...request, author })
    return report != null
  } catch (e) {
    if (e instanceof Error && e.message == 'Author is required.') {
      return e.message
    } else {
      throw e
    }
  }
}
