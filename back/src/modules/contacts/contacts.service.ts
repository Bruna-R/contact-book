import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contacstRepository: ContactsRepository) {}
  async create(createContactDto: CreateContactDto, userId: string) {
    return await this.contacstRepository.create(createContactDto, userId);
  }

  async findAll(userId: string) {
    return await this.contacstRepository.findAll(userId);
  }

  async findOne(id: string, userId: string) {
    const findContact = await this.contacstRepository.findOne(id, userId);

    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return findContact;
  }

  async update(id: string, updateContactDto: UpdateContactDto, userId: string) {
    const findContact = await this.contacstRepository.findOne(id, userId);

    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return await this.contacstRepository.update(id, updateContactDto, userId);
  }

  async remove(id: string, userId: string) {
    const findContact = await this.contacstRepository.findOne(id, userId);

    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return await this.contacstRepository.remove(id, userId);
  }
}
