import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import { TaskDTO } from "./dto/task.dto";

@Controller('tasks')
export class TaskController {

    taskService:TaskService;
    constructor(taskService: TaskService){
        this.taskService = taskService;
    }

    @Get('/getAll')
    getAllTasks(){
        return 'Obteniendo las tareas'
    }

    @Get('/getByQuery')
    getByQuery(@Query('id', ParseIntPipe) query: any){  //Parseado desde aqui
        return this.taskService.getTask(query)
    }

    @Get('/getByParams/:id')
    getByParams(@Param('id') id :any){
        return this.taskService.getTask(parseInt(id)) //Parseando la variable
    }

    @Get('/getFromService')
    getFromService(){
        return this.taskService.getTasksFromService();
    }

    @Post('/post')
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: TaskDTO){
        return this.taskService.postNew(task)
    }
}