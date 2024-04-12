// アプリケーション層
import { createReport, createUser, saveReport } from '@/app/_domain/service/reportService'
import { User } from '@/app/_domain/model/user'
import { Position } from '@/type/position'

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
  // Userドメインオブジェクトを作成(後でドメインサービスに移動する)
  // TODO: studentIdからUserドメインオブジェクトを取得する
  const author = createUser('Sample User Name', 'B3' as Position, request.studentId)

  // ドメインサービスを呼び出し、リクエストデータを基にレポートのドメインオブジェクトを取得する
  const report = createReport({ ...request, author })

  // ドメインサービスを呼び出し、取得したドメインオブジェクトの保存を依頼する
  const res = saveReport(report)

  // TODO: 成功/失敗を返す
  return res
}
