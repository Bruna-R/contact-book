import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  name: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(11)
  phone: string;
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;
  readonly created_at: Date;
}
