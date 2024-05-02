export const reportFactory = (reportRow: any) => {
  return {
    id: reportRow.id,
    title: reportRow.title,
    seminarDate: reportRow.seminar_date,
    reportNumber: reportRow.report_num,
    pageNumber: reportRow.page_num,
    totalPages: reportRow.total_pages,
    content: reportRow.contents_url,
    isSubmitted: reportRow.is_submitted,
    author: reportRow.author,
  }
}
