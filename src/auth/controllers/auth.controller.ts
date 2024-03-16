import { DataUser, LoginType } from './../../interface/loginType';
import {
  Controller,
  Post,
  Res,
  Req,
  HttpException,
  HttpStatus,
  Get,
  Body,
  Response
} from '@nestjs/common';
import { LoginService } from '../../services/login.service';
// import { response } from 'express';

@Controller('/login')
export class LoginController {
  
  constructor(private readonly loginService: LoginService) {}
  
  @Post()
  async login(@Body() request: LoginType) {
    console.log('-----------------------------------------------------')
    console.log(request)
    
    try {
    const userExists = await this.loginService.checkUserExists(request.email);
    const passwordCorrect = await this.loginService.checkPassword(request.password, request.email);

    if (passwordCorrect && userExists) {
      console.log('tudo bem');
    } else {
      console.log('senha errada');
      throw new Error('Password incorrect'); //if the password is incorrect the angular need render again the login page
    }
    } catch {
        throw new Error('usuario nao existe')
    }
  }

  @Post('/signup')
  async signup(@Body() DataUser: DataUser) {
    console.log(DataUser)
    try {
      console.log('signup required');
      return await this.loginService.createUser(DataUser);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async getAllUsers(){
    try {
      return this.loginService.getUsers();
    } catch (error) {
      throw new HttpException('no one user', 300);
    }
  }
}
