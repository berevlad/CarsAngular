import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

import { User } from './user';
import {AppService} from "./app.service";

import {Location} from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  user: User;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params:ParamMap) => this.appService.getUser(+params.get('id')))
      .subscribe(user => this.user = user);
  }

  updateUser(): void {
    this.appService.updateUser(this.user)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
