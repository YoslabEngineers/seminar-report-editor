// アプリケーション層
import { createReport } from '@/domain/service/reportService'
import { getUser } from '@/domain/service/userService'

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
  const author = getUser(request.studentId)

  // ドメインサービスを呼び出し、リクエストデータを基にレポートのドメインオブジェクトを取得する
  const report = await createReport({ ...request, author })
  return report != null
}
