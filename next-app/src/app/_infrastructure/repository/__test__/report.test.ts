import { insertReport } from '../report'
import { describe, it, expect } from '@jest/globals'
import { User } from '../../../_domain/model/user'


describe('insertReport', () => {

  it('DB', async () => {
    // Given
    const mockAuthor = new User(1, 'Sample User Name', 'B3', '12345678')
    const mockReportResource = {
      title: 'サンプルタイトル',
      seminarDate: new Date(),
      author: mockAuthor,
      reportNumber: 1,
      pageNumber: 1,
      totalPages: 1,
      content: 'レポートの内容',
      isSubmitted: false,
    }

    // When
    const report = await insertReport(mockReportResource)
    console.log(report)
    // Then
    expect(report.getId()).toBe(1)
    expect(report.getTitle()).toBe('サンプルタイトル')
    expect(report.getAuthor()).toBe(mockAuthor)
    expect(report.getReportNumber()).toBe(1)
    expect(report.getPageNumber()).toBe(1)
    expect(report.getTotalPages()).toBe(1)
    expect(report.getContent()).toBe('レポートの内容')
    expect(report.getIsSubmitted()).toBe(false)
  })
})
