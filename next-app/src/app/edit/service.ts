// ページで扱うデータの管理をします！
// reportIdはクエリパラメータ　無い可能性もある

import { Report } from '@/app/_domain/model/report' 
import { User } from '@/app/_domain/model/user'

export const getReport = (reportId?: number) => {
  // いったんダミーデータを返します
  const user = new User('和大 太郎', 'B4', '12345678')

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
