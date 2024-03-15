import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTask } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto as UpdateTaskDto } from './dto/update-task-status.dto';
// import { stringify } from 'querystring';
@Controller('task')
export class TaskController {
  constructor(public tasksService: TaskService) {}

  // @Get()
  // getAllTask(): Task[] {
  //   return this.tasksService.getAllTask();
  // }

  // @Get('/:id')
  // getTaskByID(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskByID(id);
  // }
  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     console.log('test1');
  //
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTask();
  //   }
  // }
  //
  // @Delete('/:id')
  // deleteByID(@Param('id') id: string): void {
  //   return this.tasksService.DeleteByID(id);
  // }
  // @Patch('/:id')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   //  update nhung khong dung validation Chi co Update Khong
  //   // @Body('status') status: TaskStatus
  //   @Body() UpdateTaskStatusDto: UpdateTaskDto,
  // ): Task {
  //   const { status } = UpdateTaskStatusDto;
  //   return this.tasksService.taskStatusUpdate(id, status);
  // }
  // // @Post()
  // // createTask(
  // //   @Body('title') ,
  // //   @Body('description') description: string,
  // // ): Task {
  // //   // console.log('titile', title);
  // //   console.log('title', title, 'description', description);
  //
  // //   return this.tasksService.createTask(title, description);
  // // }
  //
  // @Post()
  // createTask(@Body() createTaskDto: CreateTask): Task {
  //   return this.tasksService.createTask(createTaskDto);
  // }
  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Promise<Task> {
  //   return this.tasksService.getTaskById(id);
  // }

  @Post()
  createTask(@Body() createTaskDto: CreateTask): Promise<Task> {
    return this.tasksService.createTask1(createTaskDto);
  }
}
