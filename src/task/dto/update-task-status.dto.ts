import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.entity';

export class UpdateTaskStatusDto {
  title: string;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
