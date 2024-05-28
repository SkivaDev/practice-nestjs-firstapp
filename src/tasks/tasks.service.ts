import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 as uuid } from 'uuid';
import { updateTaskDto } from './dto/task.dto';

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

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
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

    deleteTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    updateTask(id: string, updatedFields: updateTaskDto): Task {
        const task = this.getTaskById(id);
        const newtask = Object.assign(task, updatedFields);
        this.tasks = this.tasks.map(t => (t.id === id ? newtask : t));
        return newtask;
    }
}
