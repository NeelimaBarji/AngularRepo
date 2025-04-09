import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
  name = "Neelima";
  users = DUMMY_USERS;
selectedUserId?:string;

get selectedUser(){
  return DUMMY_USERS.find((user)=> user.id === this.selectedUserId)!;
}

  onSelectUser(id: string){
    console.log('selected user with id '+id);
    this.selectedUserId=id;
  }
}
