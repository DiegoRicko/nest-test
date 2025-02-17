import { Injectable, NotFoundException } from "@nestjs/common";
import { TaskDTO } from "./dto/task.dto";

@Injectable()
export class TaskService {

    private tasks: any[] = []

    getTasksFromService(){
        return this.tasks
    }

    getTask(id: number){

        const taskFound = this.tasks.find(task => task.id === id)

        if (!taskFound) {
            return new NotFoundException(`Tarea con ID ${id} no encontrada`)            
        }

        return taskFound
    }

    postNew(task: TaskDTO) {
        console.log(task)
        this.tasks.push({
            id: this.tasks.length +1,
            ...task})
        return task
    }
}