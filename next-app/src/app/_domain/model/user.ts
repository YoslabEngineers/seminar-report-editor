import { Position } from '@/type/position';
/**
 * Userのドメインモデル
 */
export class User {
  private name: string;
  private position: Position;
  private readonly studentId: string;

  constructor(name: string, position: Position, studentId: string) {
    this.name = name;
    this.position = position;
    this.studentId = studentId;
  }

  setName(name: string) {
    this.name = name;
  }
  
  setPosition(position: Position) {
    this.position = position;
  }

  getName(): string {
    return this.name;
  }

  getPosition(): Position {
    return this.position;
  }

}
