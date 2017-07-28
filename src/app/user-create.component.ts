import {Component} from "@angular/core";
import {AppService} from "./app.service";
import {Router} from "@angular/router";
import {User} from "./user";
import {Location} from '@angular/common';

@Component({
  selector:'create-user',
  templateUrl:'./user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent {
  users: User[];
  selectedUser: User;

  constructor(
    private appService:AppService,
    private router: Router,
    private location: Location
  ){}

add(firstName:string, lastName: string, password: string,
    email:string): void {
  firstName = firstName.trim();
  lastName = lastName.trim();
  password = password.trim();
  email = email.trim();
  if(!firstName&&!lastName&&!password&&!email) {return;}
  this.appService.createUser(firstName, lastName, password, email)
    .then(user => {
      this.users.push(user);
      this.selectedUser = null;
    })
  this.router.navigate(['/users']);
}

  refresh(): void {
    window.location.reload();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
  goBack(): void {
    this.location.back();
  }
}

