import { Injectable } from "@angular/core";
import { NewTask } from "../userstory/userstory.model";

@Injectable({ providedIn: 'root'})
export class TasksService{
    private tasks = [

        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary: 'Learn all basics and advanced concepts of Angular',
          dueDate: '2025-05-31'
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Master Java',
          summary: 'Learn all basics and advanced concepts of Java',
          dueDate: '2025-08-31'
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Master AWS',
          summary: 'Learn all basics and advanced concepts of AWS',
          dueDate: '2025-09-31'
        },
        {
          id: 't4',
          userId: 'u1',
          title: 'Master HTML',
          summary: 'Learn all basics and advanced concepts of HTML',
          dueDate: '2025-05-31'
        }
      ];

      constructor() {
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
      }
      getUserTasks(userId: string){
         return this.tasks.filter((task)=> userId === task.userId)!;
      }

      addTask(taskData: NewTask, userId: string){
        this.tasks.unshift({
            id: new Date().getTime().toLocaleString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
          });

          this.saveTasks();
      }

      removeTask(id: string){
        this.tasks = this.tasks.filter((task)=>task.id !== id);
        this.saveTasks();
      }

      private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
}