import { LoginType, DataUser } from '../interface/loginType';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { uuid } from 'uuidv4';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService) {}

  async checkUserExists(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  }

  async checkPassword(password: string, email: string) {
    const userPassword = await this.prisma.user.findUnique({
      where: {
        email: email,
      }
    });

    return !!(userPassword && userPassword.password === password);
  }

  async createUser(dataUser: DataUser) {
    const id = uuid();
    const name = dataUser.name;
    const email = dataUser.email;
    const cpf = dataUser.cpf;
    const password = dataUser.password;
    const repeatPassword = dataUser.repeatPassword;
    const agreeTerms = dataUser.agreeTerms;

    // Verificar se a senha e a senha repetida são iguais
    if (password !== repeatPassword) {
      throw new HttpException('Passwords do not match', HttpStatus.BAD_REQUEST);
    }

    // Se as senhas coincidirem, criar o usuário no banco de dados
    const userCreation = await this.prisma.user.create({
      data: {
        id: id,
        name: name,
        email: email,
        cpf: cpf,
        password: password,
        agreeTerms: agreeTerms,
      },
    });
    console.log(dataUser);
    return userCreation;
  }

  async getUsers() {
    try {
      const result = await this.prisma.user.findMany();
      console.log(result); // Faz algo com o resultado da promessa
      return result
    } catch (erro) {
      console.error(erro); // Lidar com erros, se houver
    }
  }
}
