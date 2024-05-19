import prisma from '@/lib/prisma/client'
import type { Prisma } from '@prisma/client'


/**
 * Userを登録する
 * @param studentId
 * @param name
 * @param email
 * @param position
 * @param password
 */
export async function insertUser(studentId: string, name: string, email: string, position: string, password: string) {
  const userInputData: Prisma.UsersCreateInput = {
    student_id: studentId,
    name: name,
    position: position,
  }

  try {
    const userRow = await prisma.users.create({
      data: userInputData,
    })

    return userRow
  } catch (e) {
    console.error(e)
    throw new Error('Prisma Error')
  }
}
