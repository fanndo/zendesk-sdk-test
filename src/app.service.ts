import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as jwt from 'jsonwebtoken';
import { IUserRequest } from './interfaces/IUserRequest.interface';


@Injectable()
export class AppService {

  private subdomain;
  private secretKey;
  private email;
  private userId;


  constructor (private readonly configService: ConfigService )
  {
    this.subdomain =  this.configService.get('subdomain');
    this.secretKey =  this.configService.get('secret');
    this.email =  this.configService.get('email');
    console.log(this.configService.get('userId'))
    this.userId =  +this.configService.get('userId');
  }

  getHello(): string {
    return 'Hello World!';
  }

  async getToken(userToken:number): Promise<any> {

    console.log({userToken, userlocal: this.userId, comp:+userToken !== +this.userId})

    // if(+userToken !== +this.userId){
    //   return null;
    // }

    const payload : IUserRequest = {
      name:'no name',
      email: 'fanndo447@gmail.com',
      jti:+userToken
    }
    
    const token =  jwt.sign(payload,'Zbiwa3Ji8w3oTm8INcFGCcun08jR4syHIBDuGJs0ozwDviGg',{ algorithm: 'HS256'}); // Puedes ajustar la duración del token según tus necesidades
    
    const redirect = `https://${this.subdomain}.zendesk.com/access/jwt?jwt=${token}` ;

    return {
      redirect,
      token
    }
  }
}
