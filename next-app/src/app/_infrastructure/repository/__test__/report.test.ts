import { insertReport } from '../report'
import { describe, it, expect, beforeEach, afterEach } from '@jest/globals'
import { User } from '../../../_domain/model/user'
import { clearTable, setTable } from '../../../../testHelper/setupDB'

describe('insertReport', () => {

  beforeEach(setTable)
  afterEach(clearTable)

  it('ReportをDBに格納してドメインオブジェクトを取得する', async () => {
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
