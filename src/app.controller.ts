import { BadRequestException, Body, Controller, Get, HttpCode, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { IUserTokenRequest } from './interfaces/IUserRequest.interface';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @HttpCode(200)
  async token(@Body() user:IUserTokenRequest){


    const result = await this.appService.getToken(+user.user_token);

    console.log({result, user})
    if (result == null){
      throw new BadRequestException('Not Found Custom');
    }
    return {
      jwt: result.token
    };

  }
}
