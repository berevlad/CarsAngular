import {Component, OnInit} from '@angular/core';
import {Logs} from './logs';
import {AppService} from './app.service';
import {Router} from '@angular/router';


@Component({
  styleUrls: ['./logs.component.css'],
  templateUrl: './logs.component.html',
  providers: [AppService]
})
export class LogsComponent implements OnInit {
  title = 'Logs';
  logs: Logs[];
  selectedLogs: Logs;

  constructor(private appService: AppService, private router: Router) {
  }

  onSelect(element: Logs): void {
    this.selectedLogs = element;
  }

  getLogs(): void {
    this.appService.getLogs().then(logs => this.logs = logs);
  }

  ngOnInit(): void {
    this.getLogs();
  }

  gotoDetail(log: Logs): void {
    this.router.navigate(['logs/', log.id]);
  }

  delete(logs: Logs): void {
    this.appService
      .deleteLog(logs.id)
      .then(() => {
        this.logs = this.logs.filter(l => l !== logs);
        if (this.selectedLogs === logs) {
          this.selectedLogs = null;
        }
      });
  }

  add(userId: string, vehicleId: string): void {
    userId = userId.trim();
    vehicleId = vehicleId.trim();
    if (!userId && !vehicleId) {
      return;
    }
    this.appService.createLog(userId, vehicleId)
      .then(logs => {
        this.logs.push(logs);
        this.selectedLogs = null;
      });
  }

  refresh(): void {
    window.location.reload();
  }


}
