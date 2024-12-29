import { Position } from '@/type/position'
/**
 * Userのドメインモデル
 */
export class User {
  private readonly id: number;
  private name: string;
  private position: Position;
  private readonly studentId: string;

  constructor(id: number, name: string, position: Position, studentId: string) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.studentId = studentId;
  }

  setName(name: string) {
    this.name = name
  }

  setPosition(position: Position) {
    this.position = position
  }

  getId(): number {
    return this.id;
  }

  getStudentId(): string {
    return this.studentId;
  }

  getName(): string {
    return this.name
  }

  getPosition(): Position {
    return this.position
  }
}
