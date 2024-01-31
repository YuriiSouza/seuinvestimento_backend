import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginType } from 'src/interface/loginType';
import { user } from '@prisma/client';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async checkUserExists(dataLogin: LoginType) {
    const email = dataLogin.email;

    const user = this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return !!user;
  }

  async checkPassword(dataLogin: LoginType) {
    const password: string | any = dataLogin.password;
    const email = dataLogin.email;

    if (!password) {
      const userPassword = this.prisma.user.findUnique({
        where: {
          email: email,
        },
        select: {
          password: true,
        },
      });

      return !!(userPassword == password);
    } else {
      return false;
    }
  }

  async createUser(dataUser: user) {
    const name = dataUser.name;
    const email = dataUser.email;
    const cpf = dataUser.cpf;
    const Password = dataUser.password;
    const agreeTerms = dataUser.agreeTerms;

    const userCreation = this.prisma.user.create({
      data: {
        name: name,
        email: email,
        cpf: cpf,
        password: Password,
        agreeTerms: agreeTerms,
      },
    });

    return userCreation;
  }
}
