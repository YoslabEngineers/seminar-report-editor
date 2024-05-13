// ページで扱うデータの管理をします！
// reportIdはクエリパラメータ　無い可能性もある

import { Report } from '@/domain/model/report'
import { User } from '@/domain/model/user'

export const getReport = ({ user, reportId }: { user: User; reportId?: number }) => {
  if (!reportId) {
    //TODO: ドメイン層に実装
    // getDraftReport()

    // いったんダミーデータを返します
    return new Report({
      id: 1,
      title: 'タイトル',
      author: user,
      seminarDate: new Date(),
      reportNumber: 1,
      pageNumber: 1,
      totalPages: 1,
      content: '内容',
      isSubmitted: false,
    })
  }

  //TODO: ドメイン層に実装
  // getReportById(reportId)

  // いったんダミーデータを返します
  return new Report({
    id: 1,
    title: 'タイトル',
    author: user,
    seminarDate: new Date(),
    reportNumber: 1,
    pageNumber: 1,
    totalPages: 1,
    content: '内容',
    isSubmitted: false,
  })
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
