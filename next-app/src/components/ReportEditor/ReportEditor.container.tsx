import { ReportEditorView } from './ReportEditor.view'
import type { Report } from '@/domain/model/report'

export const ReportEditorContainer = ({ report }: { report: Report }) => {
  const pageNumber = report.getPageNumber().toString()
  const reportNumber = report.getReportNumber().toString()
  const content = report.getContent()
  const seminarDate = report.getSeminarDate().toLocaleDateString('ja-JP')
  const title = report.getTitle()

  return (
    <ReportEditorView
      pageNumber={pageNumber}
      reportNumber={reportNumber}
      content={content}
      seminarDate={seminarDate}
      title={title}
    />
  )
}
