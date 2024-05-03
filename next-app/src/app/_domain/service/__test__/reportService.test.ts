import { createReport, ReportResource } from '../reportService'
import { User } from '../../model/user'
import { Report } from '../../model/report'
import { describe, it, expect} from '@jest/globals'

jest.mock('@/src/app/_infrastructure/repository/report', () => ({
  insertReport: (resource: ReportResource) =>
    new Report({
      id: 1,
      title: resource.title,
      author: resource.author,
      seminarDate: resource.seminarDate,
      reportNumber: resource.reportNumber,
      pageNumber: resource.pageNumber,
      totalPages: resource.totalPages,
      content: resource.content,
      isSubmitted: resource.isSubmitted,
    }),
}))

describe('createReport', () => {
  it('Reportのドメインモデルを返す', async () => {
    const author = new User('Sample User Name', 'B3', '12345678')

    const resource: ReportResource = {
      title: 'test title',
      seminarDate: new Date(),
      author: author,
      reportNumber: 1,
      pageNumber: 1,
      totalPages: 1,
      content: '',
      isSubmitted: false,
    }

    const report: Report = await createReport(resource)
    expect(report.getTitle()).toBe('test title')
    expect(report.getAuthor()).toBe(author)
    expect(report.getReportNumber()).toBe(1)
    expect(report.getPageNumber()).toBe(1)
    expect(report.getTotalPages()).toBe(1)
    expect(report.getContent()).toBe('')
    expect(report.getIsSubmitted()).toBe(false)
  })

  it('タイトルが30文字以上の場合は例外を投げる', async () => {
    const author = new User('Sample User Name', 'B3', '12345678')

    const resource: ReportResource = {
      title: 'a'.repeat(31),
      seminarDate: new Date(),
      author: author,
      reportNumber: 1,
      pageNumber: 1,
      totalPages: 1,
      content: '',
      isSubmitted: false,
    }

    expect(createReport(resource)).rejects.toThrow('too long report title')
  })
})
