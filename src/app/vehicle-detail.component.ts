import {Component, OnInit} from '@angular/core';
import {Vehicle} from './vehicle';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';
import {AppService} from "./app.service";

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls:['./vehicle-detail.css']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle;

  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private location: Location,) {
  }

  ngOnInit(): void {
    this.route.paramMap.switchMap((params: ParamMap) => this.appService.getVehicle(+params.get('id')))
      .subscribe(vehicle => this.vehicle = vehicle);
  }

  save(): void {
    this.appService.updateVehicle(this.vehicle)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
