import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
// import { v1 as uuidv1 } from 'uuid';
// import { v4 as uuidv4 } from 'uuid';
import { CreateTask } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private  taskRepository: Repository<Task>,
  ) {}
  // private tasks = ['saiGon', 'HaNoi'];
  //
  // private task_s: Task[] = [];
  // getAllTask() {
  //   return this.task_s;
  // }
  //
  // getTaskByID(id: string): Task {
  //   // get task by id not using validation
  //   // return this.task_s.find((task_s) => task_s.id === id);
  //
  //   //this is code get Task by Id Using validation
  //
  //   const found = this.task_s.find((task) => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with Id "${id}" not found`);
  //   }
  //   return found;
  // }
  //
  // DeleteByID(id: string): void {
  //   // Them Found va có them validation Neu khong Tim Thay
  //   const found = this.getTaskByID(id);
  //   this.task_s = this.task_s.filter((task) => task.id !== found.id);
  //
  //   //Tim kiem Phan Tu nhung Khong thong Bao Khi Khong Tim Thay --> Khong Co Validation Neu Khong Tim Thay
  //   // khi khong co
  //   // this.task_s = this.task_s.filter((task_s) => task_s.id !== id);
  //
  //   console.log(this.task_s);
  // }
  //
  // taskStatusUpdate(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskByID(id);
  //   task.status = status;
  //   console.log('after Update' + JSON.stringify(task));
  //   return task;
  // }
  // createTask(createTaskDto: CreateTask): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuidv4(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   // this.createTask.push(task);
  //
  //   this.task_s.push(task);
  //   // console.log("task_s"+this.task_s);
  //   // console.log('step2');
  //   console.log(task);
  //
  //   return task;
  // }
  //
  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //
  //   let tasks = this.getAllTask();
  //
  //   // do something with status
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         console.log('test1');
  //
  //         return true;
  //         console.log('test_1_2');
  //       }
  //       console.log('test_1_2_3');
  //       return false;
  //       console.log('test_1_2_3_4');
  //     });
  //   }
  //   console.log('test_1_2_3_4_5');
  //   return tasks;
  // }

  // async getTaskById(id: string) {
  //   const found = await this.taskRepository.findOne(id);
  //
  //   if (!found) {
  //     throw new NotFoundException(`Task with ID "${id}" not found`);
  //   }
  //
  //   return found;
  // }


  async createTask1(createTaskDto: CreateTask): Promise<Task> {
    const { title, description } = createTaskDto;

    // Create a new Task entity instance
    const newTask = this.taskRepository.create({
      title,
      description,
      status: TaskStatus.OPEN, // Set initial state to OPEN
    });

    // Save the new task to the database
    try {
      const savedTask = await this.taskRepository.save(newTask);
      return savedTask; // Return the created task
    } catch (error) {
      // Handle potential errors during saving
      throw new NotFoundException('Failed to create task'); // Or provide a more specific error message
    }
  }

  console.log("day la test 2");

  //dont need make it to call it cause it writed in service
  // i just call it out when i want use this

  //

  // createTask(createTaskDto: CreateTask): Promise<Task> {
  //   return this.taskRepository.createTask1(createTaskDto);
  // }
}
