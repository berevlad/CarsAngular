import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Vehicle} from './vehicle';
import {AppService} from "./app.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-vehicle',
  providers: [AppService],
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})

export class VehicleCreateComponent {
  vehicles: Vehicle[];
  selectedVehicle: Vehicle;

  constructor(private appService: AppService,
              private router: Router,
              private location: Location) {
  }

  add(name: string, vehicleId: string): void {
    name = name.trim();
    vehicleId = vehicleId.trim();
    if (!name && !vehicleId) {
      return;
    }
    this.appService.createVehicle(name, vehicleId)
      .then(vehicle => {
        this.vehicles.push(vehicle);
        this.selectedVehicle = null;
      });
    this.router.navigate(['/vehicles']);
  }

  refresh(): void {
    window.location.reload();
  }
  goBack(): void {
    this.location.back();
  }

  onSelect(vehicle: Vehicle): void {
    this.selectedVehicle = vehicle;
  }
}

