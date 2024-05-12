import { testApiHandler } from 'next-test-api-route-handler'
import { describe, expect, test } from '@jest/globals'
import * as appHandler from '../route'

jest.mock('@/src/app/_application/service/registerReport.ts', () => ({
  registerNewReport: async () => true,
}))

describe('API: POST api/vi/[studentId]/report', () => {
  test('Reportの作成できた場合201を返すかどうか', async () => {
    // Given
    const studentId = '123'
    const reqBody = {
      title: 'test title',
      seminarDate: '2022-01-01',
      reportNumber: 1,
      pageNumber: 1,
      totalPages: 1,
      content: 'test content',
      isSubmitted: false,
    }

    // When
    await testApiHandler({
      paramsPatcher: (params) => ({ studentId: studentId }),
      appHandler,
      async test({ fetch }) {
        const res = await fetch({
          method: 'POST',
          body: JSON.stringify({
            reqBody,
          }),
        })

        // Then
        expect(res.status).toBe(201)
      },
    })
  })
})
