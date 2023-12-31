import * as fs from 'fs';
import * as path from 'path'


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// const httpsOptions = {
//   key: fs.readFileSync(path.resolve(__dirname, '../key.pem')),
//   cert: fs.readFileSync(path.resolve(__dirname, '../cert.pem')),
// };

async function bootstrap() {
  const app = await NestFactory.create(AppModule
    // ,{httpsOptions}
  );
  await app.listen(process.env.PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
