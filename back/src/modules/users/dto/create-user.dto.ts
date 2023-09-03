import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
  @IsString()
  @MinLength(11)
  phone: string;
  readonly created_at: Date;
}
