import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {User} from "./user";
import {AppService} from './app.service';


@Component({
  templateUrl: './user-component.html',
  styleUrls: ['./user-component.css'],
  providers: [AppService]
})
export class UserComponent implements  OnInit{
  users: User[];
  selectedUser: User;

  constructor(
    private appService: AppService,
    private router: Router) {}

  getUsers(): void {
    this.appService.getUsers().then(users => this.users = users);
  }

  deleteUser(user: User): void {
    this.appService
      .deleteUser(user.id)
      .then(() => {
        this.users = this.users.filter(u => u !== user);
        if(this.selectedUser === user) { this.selectedUser = null; }
      });
  }

  ngOnInit(): void {
    this.getUsers();
  }

  gotoDetail(): void {
    this.router.navigate(['/users', this.selectedUser.id]);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
