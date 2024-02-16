import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
// import { v1 as uuidv1 } from 'uuid';
import { v4 as uuidv4 } from 'uuid';
import { CreateTask } from './dto/create-task.dto';
import { TaskModule } from './task.module';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TaskService {
  // private tasks = ['saiGon', 'HaNoi'];

  private task_s: Task[] = [];
  getAllTask() {
    return this.task_s;
  }

  getTaskByID(id: string): Task {
    return this.task_s.find((task_s) => task_s.id === id);
  }

  DeleteByID(id: string): void {
    // khi khong co
    this.task_s = this.task_s.filter((task_s) => task_s.id !== id);

    console.log(this.task_s);
  }

  taskStatusUpdate(id: string, status: TaskStatus): Task {
    const task = this.getTaskByID(id);
    task.status = status;
    console.log('after Update' + JSON.stringify(task));
    return task;
  }
  createTask(createTaskDto: CreateTask): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    // this.createTask.push(task);

    this.task_s.push(task);
    // console.log("task_s"+this.task_s);
    // console.log('step2');
    console.log(task);

    return task;
  }

  getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTask();

    // do something with status
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (task.title.includes(search) || task.description.includes(search)) {
          console.log('test1');

          return true;
          console.log('test_1_2');
        }
        console.log('test_1_2_3');
        return false;
        console.log('test_1_2_3_4');
      });
    }
    console.log('test_1_2_3_4_5');
    return tasks;
  }
}
