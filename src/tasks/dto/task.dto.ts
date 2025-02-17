import { IsString, MinLength } from "class-validator";

export class TaskDTO {

    @IsString()
    @MinLength(1)
    json: string
}