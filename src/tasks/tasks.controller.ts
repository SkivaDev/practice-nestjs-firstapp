import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {
    }

    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string) {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body() newTask: createTaskDto) {
        return this.tasksService.createTask(newTask.title, newTask.description);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(id);
    }

    @Patch('/:id')
    updateTask(@Param('id') id: string, @Body() updatedFields: updateTaskDto) {
        return this.tasksService.updateTask(id, updatedFields);
    }
}
