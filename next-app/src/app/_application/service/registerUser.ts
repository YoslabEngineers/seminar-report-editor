import { User } from '@/app/_domain/model/user'
import { addUser } from '@/app/_domain/service/userService'

type SignUpRequest = {
  studentId: string
  name: string
  email: string
  position: string
  password: string
}

// 新しいユーザーを登録する
export const signUp = async (request: SignUpRequest) => {
  const user = addUser(request.studentId, request.name, request.email, request.position, request.password)

  return user !== null
}
