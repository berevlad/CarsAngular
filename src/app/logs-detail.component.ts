import {Component, Input, OnInit} from '@angular/core';
import {Logs} from './logs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {AppService} from './app.service';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';

@Component({

  selector: 'app-logs-detail',
  templateUrl: './logs-detail.component.html',
  styleUrls: [ './logs-detail.component.css' ]


})

export class LogsDetailComponent implements OnInit {
  @Input() logs: Logs;
  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.appService.getLog(+params.get('id')))
      .subscribe(logs => this.logs = logs);
  }
  save(): void {
    this.appService.updateLog(this.logs)
      .then(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
    refresh(): void {
    window.location.reload();
  }
}
