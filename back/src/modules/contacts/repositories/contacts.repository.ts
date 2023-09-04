import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { Contact } from '../entities/contact.entity';

export abstract class ContactsRepository {
  abstract create(data: CreateContactDto, userId: string): Promise<Contact>;
  abstract findAll(userId: string): Promise<Contact[]>;
  abstract findOne(id: string, userId: string): Promise<Contact>;
  abstract update(
    id: string,
    data: UpdateContactDto,
    userId: string,
  ): Promise<Contact>;
  abstract remove(id: string, userId: string): Promise<void>;
}
