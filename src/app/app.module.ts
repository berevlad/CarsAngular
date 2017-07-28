import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {AppService} from './app.service';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserCreateComponent,
    VehicleComponent,
    VehicleDetailComponent,
    VehicleCreateComponent,
    RouteComponent,
    UpdateComponent,
    LogsComponent,
    LogsDetailComponent,
    ControlComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
