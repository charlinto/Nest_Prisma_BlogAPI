import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private primaService:PrismaService)  { }
  create(createUserDto: CreateUserDto) {
    return this.primaService.user.create({data: {...createUserDto}});
  }

  findAll(query: Prisma.UserInclude) {
    return this.primaService.user.findMany({include: query});
  }

  findOneByEmail(email: string) {
    return this.primaService.user.findUnique({ where: { email}});
  }
  findOne(id: string) {
    return this.primaService.user.findUnique({where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.primaService.user.update({data: updateUserDto, where: { id } })
  }

  remove(id: string) {
    return this.primaService.user.delete({ where: { id } });
  }
}
