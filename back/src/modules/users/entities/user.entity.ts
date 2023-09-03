import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class User {
  readonly id: string;
  name: string;
  email: string;
  @Exclude()
  password: string;
  phone: string;
  readonly created_at: Date;

  constructor() {
    this.id = randomUUID();
  }
}
