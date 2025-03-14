import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/express')
  getExpress(@Req() request: Request, @Res() response: Response){
    response.status(200).json({
      message: 'Hola desde coolify'
    })
  }
}

//ESTO ES PARA UN COMMIT DE PRUEBA
