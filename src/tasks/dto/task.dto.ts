import { TaskStatus } from "../tasks.entity";
import { IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class createTaskDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  title: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(3) 

  description: string;
}

export class updateTaskDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status?: TaskStatus;
}