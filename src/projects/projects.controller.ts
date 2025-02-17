import { Controller, Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
    
    @Get()
    genetated(){
        return 'nest generate controller {nombre_carpeta}, si la carpeta no existe crea una nueva'
    }

}
