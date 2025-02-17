import { Injectable } from '@nestjs/common';

export interface User {
    id: number,
    name: string
}


@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John'
        },{
            id: 2,
            name: 'Jane'
        }
    ]

    getUsers(){
        return this.users;
    }
}
