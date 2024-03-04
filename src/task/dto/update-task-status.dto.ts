import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskStatusDto {
  title: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
