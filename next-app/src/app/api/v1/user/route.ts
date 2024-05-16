import { NextApiRequest, NextApiResponse } from 'next'
import { Position } from '@/type/position'
import { NextRequest } from 'next/server'
import { signUp } from '../[studentId]/report/service/registerUser'

// 新しいユーザーを登録する
export const POST = async (req: NextRequest) => {
  // const { studentId, name, email, position, password } = request.body

  // TODO: Requestの受け取り
  const mockRequest = {
    studentId: '123',
    name: 'sample name',
    email: 'test@example.com',
    position: 'B3',
    password: 'password',
  }

  try {
    const result = await signUp(mockRequest)
    // TODO: resultによってResponseを変更
    return new Response('ok', { status: 200 })
  } catch (e) {
    return new Response('bad request', { status: 500 })
  }
}

// TODO: ユーザ情報の更新
// export const PATCH = async (req: NextRequest) => {
// }
