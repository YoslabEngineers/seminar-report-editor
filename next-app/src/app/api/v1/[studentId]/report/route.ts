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

  const res = registerNewReport({...reqBody, seminarDate: new Date(reqBody.seminarDate), studentId: studentId})

  return Response.json(res)
}