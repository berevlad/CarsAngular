import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {Route} from './route';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-my-routes',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']

})
export class UpdateComponent implements OnInit {
  routee: Route;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.appService.getRoute(+params.get('id')))
      .subscribe(route => this.routee = route);

    console.log(JSON.stringify(this.routee));
  }
  save(): void {
    this.appService.updateRoute(this.routee)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
