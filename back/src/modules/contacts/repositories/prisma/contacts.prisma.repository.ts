import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../contacts.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ContactPrismaRepository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactDto, userId: string): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, { ...data, userId });
    const newContact = await this.prisma.contact.create({
      data: { ...contact, userId },
    });

    return newContact;
  }
  async findAll(userId: string): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      where: { userId },
    });
    return contacts;
  }
  async findOne(id: string, userId: string): Promise<Contact> {
    const contact = await this.prisma.contact.findFirst({
      where: { id, userId },
    });
    return contact;
  }
  async update(
    id: string,
    data: UpdateContactDto,
    userId: string,
  ): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id, userId },
      data: { ...data },
    });
    return contact;
  }
  async remove(id: string, userId: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id, userId },
    });
  }
}
