import { type NextRequest } from 'next/server'
import { insertTest } from '@/app/_repository/report'


/**
 * Test用API
 * 現在はタイトルを指定してDBに登録する
 * @param request 
 * @returns 
 */
export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query : string = searchParams.get('title') || "default"
  const res = insertTest(query)

  return Response.json(res)
}
