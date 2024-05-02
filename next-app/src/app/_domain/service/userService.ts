import { User } from '@/app/_domain/model/user'
import { Position } from '@/type/position';

/**
 * UserのDomain Objectを作成する
 * @param name 
 * @param position 
 * @param studentId 
 * @returns 
 */
export function getUser(studentId: string) {
  if (studentId.length > 8) {
    throw new Error('Student ID must be less than 8 characters.')
  }

  // TODO: dbにアクセスしてUser情報の取得
  // const user = findUserByStudentId(studentId)
  const user = new User('Sample User Name', 'B3' as Position, studentId)

  if (user === null) {
    throw new Error('User not found.')
  }

  return user
}
