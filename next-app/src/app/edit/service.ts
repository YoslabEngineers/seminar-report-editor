// ページで扱うデータの管理をします！
// reportIdはクエリパラメータ　無い可能性もある

import { Report } from '@/app/_domain/model/report'
import { User } from '@/app/_domain/model/user'

export const getReport = ({ user, reportId }: { user: User; reportId?: number }) => {
  if (!reportId) {
    //TODO: ドメイン層に実装
    // getDraftReport()

    // いったんダミーデータを返します
    return new Report(false, 'タイトル', new Date(), user, 1, 1, 1, '内容')
  }

  //TODO: ドメイン層に実装
  // getReportById(reportId)

  // いったんダミーデータを返します
  return new Report(false, 'タイトル', new Date(), user, 1, 1, 1, '内容')
}

export const postReport = async (report: Report) => {
  const requestBody /*: ReportPostRequest*/ = {
    title: report.getTitle(),
    seminarDate: report.getSeminarDate().toISOString(),
    reportNumber: report.getReportNumber(),
    pageNumber: report.getPageNumber(),
    totalPages: report.getTotalPages(),
    content: report.getContent(),
    isSubmitted: report.getIsSubmitted(),
  }

  // 学生番号を取得するためにUserを取得
  const user = report.getAuthor()

  const res = await fetch(`${process.env.BASE_URL}/api/v1/${user.getStudentId()}/report`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
}
