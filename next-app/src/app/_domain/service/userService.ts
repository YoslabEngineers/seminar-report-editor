import { User } from '@/app/_domain/model/user'
import { Position } from '@/type/position';

/**
 * UserのDomain Objectを作成する
 * @param name 
 * @param position 
 * @param studentId 
 * @returns 
 */
export function createUser(
  name: string,
  position: Position,
  studentId: string
) {

  if (studentId === null) {
    throw new Error('Student ID is required.')
  }

  if (studentId.length > 8) {
    throw new Error('Student ID must be less than 8 characters.')
  }

  return new User(name, position, studentId)
}
