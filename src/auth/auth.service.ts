import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {


    
    constructor(private userService: UsersService, private jwtService:JwtService) {  }


    async valdiateUser(email: string, password: string) {
        const user = await this.userService.findOneByEmail (email)
        if(!user ||  user.password !== password) return false;
        return user
    }

    sign(user: User) {
        const accessToken = this.jwtService.sign({sub: user.id, email:user.email})
        return {
            access_token : accessToken
        }
    }
   async registerUser(createUserDto:CreateUserDto) {
    const newUser = await this.userService.create(createUserDto)
    return this.sign(newUser)
   }
}
    