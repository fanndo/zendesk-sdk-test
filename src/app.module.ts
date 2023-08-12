import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { config } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [ConfigModule.forRoot({
    load: [config],
    validationSchema:JoiValidationSchema
    // validationSchema: Joi.object({
    //   PORT: Joi.number().required()
    // })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
