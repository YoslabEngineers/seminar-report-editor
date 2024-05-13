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

const mockAuthor = new User(1,'Sample User Name', 'B3', '12345678')

describe('createReport', () => {

  it('Reportのドメインモデルを返す', async () => {
    // Given
    const mockResource: ReportResource = {
      title: 'test title',
      seminarDate: new Date(),
      author: mockAuthor,
      reportNumber: 1,
      pageNumber: 1,
      totalPages: 1,
      content: '',
      isSubmitted: false,
    }

    // When
    const report: Report = await createReport(mockResource)

    // Then
    expect(report.getTitle()).toBe('test title')
    expect(report.getAuthor()).toBe(mockAuthor)
    expect(report.getReportNumber()).toBe(1)
    expect(report.getPageNumber()).toBe(1)
    expect(report.getTotalPages()).toBe(1)
    expect(report.getContent()).toBe('')
    expect(report.getIsSubmitted()).toBe(false)
  })

  it('タイトルが30文字以上の場合は例外を投げる', async () => {
    // Given
    const mockResource: ReportResource = {
      title: 'a'.repeat(31),
      seminarDate: new Date(),
      author: mockAuthor,
      reportNumber: 1,
      pageNumber: 1,
      totalPages: 1,
      content: '',
      isSubmitted: false,
    }

    // When & Then
    expect(createReport(mockResource)).rejects.toThrow('too long report title')
  })
})
