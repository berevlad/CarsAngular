import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Vehicle} from './vehicle';
import {AppService} from './app.service';

@Component({
  templateUrl: './vehicle-component.html',
  providers: [AppService],
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle;

  constructor(private appService: AppService,
              private router: Router) {
  }

  getVehicles(): void {
    this.appService.getVehicles().then(vehicles => this.vehicles = vehicles);
  }

  deleteVehicle(vehicle: Vehicle): void {
    this.appService
      .deleteVehicle(vehicle.id)
      .then(() => {
        this.vehicles = this.vehicles.filter(u => u !== vehicle);
        if (this.selectedVehicle === vehicle) {
          this.selectedVehicle = null;
        }
      });
  }

  ngOnInit(): void {
    this.getVehicles();
  }

  gotoDetail(): void {
    this.router.navigate(['vehicle', this.selectedVehicle.id]);
  }

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }
}
