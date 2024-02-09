import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task, TaskStatus } from './task.model';
import { CreateTask } from './dto/create-task.dto';
// import { stringify } from 'querystring';
@Controller('task')
export class TaskController {
  constructor(public tasksService: TaskService) {}

  @Get()
  getAllTask(): Task[] {
    return this.tasksService.getAllTask();
  }

  @Get('/:id')
  getTaskByID(@Param('id') id: string): Task {
    return this.tasksService.getTaskByID(id);
  }

  @Delete('/:id')
  DeleteByID(@Param('id') id: string): void {
    return this.tasksService.DeleteByID(id);
  }
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.tasksService.taskStatusUpdate(id, status);
  }
  // @Post()
  // createTask(
  //   @Body('title') ,
  //   @Body('description') description: string,
  // ): Task {
  //   // console.log('titile', title);
  //   console.log('title', title, 'description', description);

  //   return this.tasksService.createTask(title, description);
  // }

  @Post()
  createTask(@Body() createTaskDto: CreateTask): Task {
    return this.tasksService.createTask(createTaskDto);
  }
}
