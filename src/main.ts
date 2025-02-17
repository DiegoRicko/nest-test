import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({  //VALIDACIONES GLOBALES
    whitelist:true  //Evita datos no especificados en el DTO
  })) 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
