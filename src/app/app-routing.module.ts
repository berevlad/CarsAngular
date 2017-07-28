import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from './user.component';
import {UserDetailComponent} from './user-detail.component';
import {UserCreateComponent} from './user-create.component';
import {VehicleComponent} from './vehicle.component';
import {VehicleDetailComponent} from './vehicle-detail.component';
import {VehicleCreateComponent} from './vehicle-create.component';
import {RouteComponent} from './route.component';
import {UpdateComponent} from './update.component';
import {LogsComponent} from './logs.component';
import {LogsDetailComponent} from './logs-detail.component';
import {ControlComponent} from "./control.component";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'control', component: ControlComponent},

  { path: 'users', component: UserComponent },
  { path: 'users/:id', component: UserDetailComponent},
  { path: 'createUser', component: UserCreateComponent },

  { path: 'vehicles', component: VehicleComponent },
  { path: 'vehicle/:id', component: VehicleDetailComponent },
  { path: 'createVehicle', component: VehicleCreateComponent },

  { path: 'routes', component: RouteComponent },
  { path: 'routes/:id', component: UpdateComponent },

  { path: 'logs',     component: LogsComponent },
  { path: 'logs/:id', component: LogsDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
})
export class AppRoutingModule {}
