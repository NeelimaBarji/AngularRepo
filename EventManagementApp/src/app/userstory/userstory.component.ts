import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Task } from './userstory.model';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-userstory',
  imports: [DatePipe],
  templateUrl: './userstory.component.html',
  styleUrl: './userstory.component.css'
})
export class UserstoryComponent {
  @Input({required: true}) task!:Task;

  private tasksService = inject(TasksService);

  onTaskComplete(){
   this.tasksService.removeTask(this.task.id);
  }
}
