import { PrismaService } from '../infra/prisma/prisma.service';
import { LoginController } from './../auth/controllers/auth.controller';
import { LoginService } from './../services/login.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [LoginController],
  providers: [LoginService, PrismaService],
})
export class LoginModule {}
