import { testApiHandler } from 'next-test-api-route-handler'
import { describe, expect, test, beforeEach } from '@jest/globals'
import { registerNewReport } from '../../../../../_application/service/registerReport'
import * as appHandler from '../route'

jest.mock('@/src/app/_application/service/registerReport.ts', () => ({
  registerNewReport: jest.fn(() => true),
}))

describe('API: POST api/vi/[studentId]/report', () => {
  // Given
  const mockStudentId = '123'
  const mockReqBody = {
    title: 'test title',
    seminarDate: '2022-01-01',
    reportNumber: 1,
    pageNumber: 1,
    totalPages: 1,
    content: 'test content',
    isSubmitted: false,
  }

  beforeEach(() => {
    registerNewReport.mockClear()
  })

  test.each`
    isRegisterSuccess | expected
    ${true}           | ${201}
    ${false}          | ${500}
  `(
    'Reportの作成結果が $isRegisterSuccess のとき，statusが $expected を返すかどうか',
    async ({ isRegisterSuccess, expected }) => {
      registerNewReport.mockImplementation(() => isRegisterSuccess)

      // When
      await testApiHandler({
        paramsPatcher: (params) => ({ studentId: mockStudentId }),
        appHandler,
        async test({ fetch }) {
          const res = await fetch({
            method: 'POST',
            body: JSON.stringify({
              mockReqBody,
            }),
          })

          // Then
          expect(res.status).toBe(expected)
        },
      })
    },
  )
})
