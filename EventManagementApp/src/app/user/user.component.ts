// import { Component, Input, signal, computed } from '@angular/core';
import { Component, Input, Output, EventEmitter} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
// export class UserComponent {
//   selectedUser = DUMMY_USERS[randomIndex];

//   get imagePath(){
//     return  'assets/users/'+this.selectedUser.avatar;
//   }

//   onSelectUser(){
//     const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
//     this.selectedUser = DUMMY_USERS[randomIndex];
//   }
// }

/**
 * Below code is with signal
 */
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(()=> 'assets/users/'+this.selectedUser().avatar)
  

//   onSelectUser(){
//     const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }

/**
 * Below code for multiple user components display
 */
export class UserComponent {
  // @Input({required: true}) id!:string;
  // @Input({required: true}) avatar!:string;
  // @Input({required: true}) name!:string;
  @Input({required: true}) user!:User;
  @Input({required: true}) isUserSelected!:boolean;

  @Output() select= new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/'+this.user.avatar;
  }
  onSelectUser(){
    this.select.emit(this.user.id);
  }
}

