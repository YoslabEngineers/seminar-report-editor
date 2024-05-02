export const reportFactory = (reportRow: any) => {
  return {
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
