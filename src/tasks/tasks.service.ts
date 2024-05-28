import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = [{
        id: '1',
        title: 'Task 1',
        description: 'Description 1',
        status: TaskStatus.PENDING
    }];

    getAllTasks() {
        return this.tasks;
    }

    createTask(title: string, description: string) {
        const task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.PENDING,
        };
        this.tasks.push(task);
        
        return task;
    }
}
