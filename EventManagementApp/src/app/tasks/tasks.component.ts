import { Component, Input } from '@angular/core';
import { UserstoryComponent } from "../userstory/userstory.component";
import { NewTaskComponent } from "../new-task/new-task.component";
import { NewTask } from '../userstory/userstory.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [UserstoryComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) name!:string;
  @Input({required: true}) userId!:string;
  isAddingTask = false;
  // private tasksService: TasksService;
  
constructor(private tasksService:TasksService){
  this.tasksService = tasksService;
}
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddButton(){
    this.isAddingTask = true;
  }

  onCloseAddingTask(){
    
      this.isAddingTask = false;
  }

}
