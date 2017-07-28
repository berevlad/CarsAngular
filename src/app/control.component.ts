import {Component, OnInit} from "@angular/core";
import {AppService} from "./app.service";
import {Route} from "./route";
import {Router} from "@angular/router";


@Component({
  templateUrl: './control.component.html',
  styleUrls:['./control.component.css'],
  providers: [AppService]
})
export class ControlComponent  {
route: Route[];

  constructor(private appService: AppService, private router: Router) {
  }

  moveforward(): void {
    this.appService.moveforward();
  }

  moveleft(): void {
    this.appService.moveleft();
  }

  moveright(): void {
    this.appService.moveright();
  }
}
