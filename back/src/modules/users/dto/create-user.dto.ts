import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User name',
    default: 'João da Silva',
    type: String,
  })
  @IsString()
  name: string;
  @ApiProperty({
    description: 'User email',
    default: 'joaosilva@mail.com',
    type: String,
  })
  @IsString()
  @IsEmail()
  email: string;
  @ApiProperty({
    description: 'User password, min 8 caracteres',
    default: '12345678',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password: string;
  @ApiProperty({
    description: 'User phone number, min 11 caracteres',
    default: '11987654321',
    type: String,
  })
  @IsString()
  @MinLength(11)
  phone: string;
  readonly created_at: Date;
}
