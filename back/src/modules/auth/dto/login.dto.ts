import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'User email',
    default: 'joaosilva@mail.com',
    type: String,
  })
  @IsEmail()
  email: string;
  @ApiProperty({
    description: 'User password, min 8 caracteres',
    default: '12345678',
    type: String,
  })
  @IsString()
  password: string;
}
