import { describe, it, expect, test } from '@jest/globals'
import { User } from '../../../_domain/model/user'
import { Report } from '../../../_domain/model/report'
import { ReportResource } from '../../../_domain/service/reportService'
import { registerNewReport } from '../registerReport'

jest.mock('@/src/app/_domain/service/userService.ts', () => ({
  getUser: (studentId: string) => {
    return new User('Sample User Name', 'B3', studentId)
  },
}))

jest.mock('@/src/app/_domain/service/reportService', () => ({
  createReport: (resource: ReportResource) => {
    if (resource.title.length > 30) {
      return null
    }

    return new Report({
      id: 1,
      title: resource.title,
      author: resource.author,
      seminarDate: resource.seminarDate,
      reportNumber: resource.reportNumber,
      pageNumber: resource.pageNumber,
      totalPages: resource.totalPages,
      content: resource.content,
      isSubmitted: resource.isSubmitted,
    })
  },
}))

describe('registerNewReport', () => {
  test.each`
    titleLength | expected
    ${30}       | ${true}
    ${31}       | ${false}
  `('titleLengthが $titleLength の場合、$expected を返す', async ({ titleLength, expected }) => {
    // Given
    const request = {
      title: 'a'.repeat(titleLength as number),
      seminarDate: new Date(),
      reportNumber: 1,
      pageNumber: 1,
      totalPages: 1,
      content: '',
      isSubmitted: false,
      studentId: '12345678',
    }

    // When
    const result = await registerNewReport(request)

    // Then
    expect(result).toBe(expected)
  })
})
