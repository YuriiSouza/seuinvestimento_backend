import {
  Controller,
  Post,
  Res,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from './login.service';
import { LoginType } from 'src/interface/loginType';
import { user } from '@prisma/client';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @Post('')
  async login(@Req() request: LoginType, @Res() response: Response) {
    const userExists = await this.loginService.checkUserExists(request);

    if (!userExists) {
      console.log('user nao existe');
      return response.status(404).send({ message: "User doesn't exists" }); // if user doenst exists, the angular will render the signup page
    } else {
      const passwordCorrect = await this.loginService.checkPassword(request);

      if (!passwordCorrect) {
        console.log('senha errada');
        return response.status(401).send({ message: 'Password incorrect' }); //if the password is incorrect the angular need render again the login page
      } else {
        console.log('tudo bem');
        return response.sendStatus(200);
      }
    }
  }

  @Post('/signup')
  async signup(@Req() request: user) {
    try {
      return this.loginService.createUser(request);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
