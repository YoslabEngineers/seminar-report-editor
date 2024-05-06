import { insertReport } from '../report'
import { prismaMock } from '../../../../lib/prisma/singleton'
import { describe, it, expect } from '@jest/globals'
import { User } from '../../../_domain/model/user'

describe('insertReport', () => {
  prismaMock.reports.create.mockResolvedValue({
    id: 1,
    is_submitted: false,
    title: 'サンプルタイトル',
    seminar_date: new Date(),
    user_id: 1,
    report_num: 1,
    page_num: 1,
    total_pages: 1,
    contents_url: 'レポートの内容',
    created_at: new Date(),
    updated_at: new Date(),
  })

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
