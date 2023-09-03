import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {
  constructor(private contacstRepository: ContactsRepository) {}
  async create(createContactDto: CreateContactDto) {
    return await this.contacstRepository.create(createContactDto);
  }

  async findAll() {
    return await this.contacstRepository.findAll();
  }

  async findOne(id: string) {
    const findContact = await this.contacstRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return findContact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const findContact = await this.contacstRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return await this.contacstRepository.update(id, updateContactDto);
  }

  async remove(id: string) {
    const findContact = await this.contacstRepository.findOne(id);

    if (!findContact) {
      throw new NotFoundException('Contact not found');
    }
    return await this.contacstRepository.remove(id);
  }
}
