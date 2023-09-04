import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateContactDto {
  @ApiProperty({
    description: 'Contact name',
    default: 'Maria Souza',
    type: String,
  })
  @IsString()
  name: string;
  @ApiProperty({
    description: 'Contact email',
    default: 'mariasouza@mail.com',
    type: String,
  })
  @IsString()
  @IsEmail()
  email: string;
  @ApiProperty({
    description: 'Contact phone number, min 11 caracteres',
    default: '11987654321',
    type: String,
  })
  @IsString()
  @MinLength(11)
  phone: string;
  @ApiProperty()
  readonly created_at: Date;
}
