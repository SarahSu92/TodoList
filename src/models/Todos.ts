export class Todo {
    id: number;
    name: string;
    created_at: number;
    done: number;

    constructor(id: number, name: string, created_at: number, done: number){
        this.id = id;
        this.name = name;
        this.created_at = created_at;
        this.done = done;
    }

}