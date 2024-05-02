import type { NextRequest } from 'next/server'
import { registerNewReport } from '@/app/_application/service/registerReport'


type ReportPostRequest = {
    title: string
    seminarDate: string
    reportNumber: number
    pageNumber: number
    totalPages: number
    content: string
    isSubmitted: boolean
}

/**
 * Report新規作成API
 * @param request 
 * @param param1 
 * @returns 
 */
export async function POST(request: NextRequest, { params }: { params: { studentId: string } }) {
  const reqBody = (await request.json()) as ReportPostRequest
  const studentId = params.studentId

  try {
    const res = await registerNewReport({
      ...reqBody,
      seminarDate: new Date(reqBody.seminarDate),
      studentId: studentId,
    })

    return res ? new Response('ok', { status: 201 }) : new Response('bad request', { status: 500 })
  } catch (err) {
    if (!(err instanceof Error)) {
      return new Response('unknown Err', { status: 500 })
    }

    switch (err.message) {
      case 'too long report title':
        return new Response('too long title', { status: 400 })
      case 'Student ID must be less than 8 characters.':
        return new Response('Student ID must be less than 8 characters.', { status: 400 })
      case 'User not found.':
        return new Response('User not found.', { status: 404 })
      default:
        return new Response('bad request', { status: 500 })
    }
  }
}
