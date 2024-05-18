import { ReportEditorView } from './ReportEditor.view'
import type { Report } from '@/domain/model/report'
import React, { useState } from 'react'

export const ReportEditorContainer = ({ report }: { report: Report }) => {
  const [pageNumber, setPageNumber] = useState<string>(report.getPageNumber().toString())
  const [reportNumber, setReportNumber] = useState<string>(report.getReportNumber().toString())
  const [content, setContent] = useState<string>(report.getContent())
  const [seminarDate, setSeminarDate] = useState<string>(report.getSeminarDate().toLocaleDateString('ja-JP'))
  const [title, setTitle] = useState<string>(report.getTitle())

  // ページ番号を変更する
  const handlePageNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('PageNumber: ', e.target.value)
    // setPageNumber(e.target.value)
  }
  // レポート番号を変更する
  const handleReportNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('ReportNumber: ', e.target.value)
    // setReportNumber(e.target.value)
  }
  // レポートの内容を変更する
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Content: ', e.target.value)
    // setContent(e.target.value)
  }
  // ゼミ日程を変更する
  const handleSeminarDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('SeminarDate: ', e.target.value)
    // setSeminarDate(e.target.value)
  }
  // レポートのタイトルを変更する
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Title: ', e.target.value)
    // setTitle(e.target.value)
  }

  return (
    <ReportEditorView
      pageNumber={pageNumber}
      reportNumber={reportNumber}
      content={content}
      seminarDate={seminarDate}
      title={title}
      handlePageNumberChange={handlePageNumberChange}
      handleReportNumberChange={handleReportNumberChange}
      handleContentChange={handleContentChange}
      handleSeminarDateChange={handleSeminarDateChange}
      handleTitleChange={handleTitleChange}
    />
  )
}
