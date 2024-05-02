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
  const reqBody = await request.json() as ReportPostRequest
  const studentId = params.studentId

  try {
    const res = await registerNewReport({ ...reqBody, seminarDate: new Date(reqBody.seminarDate), studentId: studentId })
    
    if (res == "Student ID must be less than 8 characters.") {
      return new Response(res, { status: 400 })
    }

    if (res == "Author is required.") {
      return new Response(res, { status: 400 })
    }

    if (res == "Report has been created.") {
      return new Response(res, { status: 200 })
    }

    // 現状雑に書いてあるエラーハンドリングに関してはとりあえず500で返す
    return new Response(res, { status: 500 })

  } catch (e) {
    if (e instanceof Error) {
      return new Response(e.message, { status: 500 })
    }
  }
}