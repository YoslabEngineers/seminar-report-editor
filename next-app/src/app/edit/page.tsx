import ReportEditor from '../_components/ReportEditor'
import ReportPreview from '../_components/ReportPreview'
import LayoutSwitcher from '../_components/LayoutSwitcher'
import PageHeader from '../_components/PageHeader'
import { getReport, postReport } from './service'
import { User } from '../_domain/model/user'

export default function Edit() {
  // レポートのデータを取得
  const report = getReport()
  // console.log(report)

  // レポートのデータを保存
  const user = new User('和大 太郎', 'B4', '12345678')
  postReport(report, user)

  return (
    <main className='w-full h-screen bg-white text-black flex flex-col items-center'>
      {/* ヘッダー */}
      <PageHeader />

      {/* ページの本体部分 */}
      <div className='w-full h-full p-6 relative'>
        <div className='w-full h-full grid grid-cols-2 justify-between gap-0 border-2 border-gray-300 rounded-lg overflow-hidden'>
          {/* エディター */}
          <ReportEditor />

          {/* プレビュー */}
          <ReportPreview />

          {/* エディターとプレビューの切り替え部分 */}
          <LayoutSwitcher />
        </div>
      </div>
    </main>
  )
}
