import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Route} from './route';
import {AppService} from './app.service';

@Component({
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  routes: Route[];
  selectedRoute: Route;
  route: Route;

  constructor(private router: Router,
              private appService: AppService) {
  }

  getRoutes(): void {
    this.appService
      .getRoutes()
      .then(routes => this.routes = routes);
  }

  deleteRoute(route: Route): void {
    this.appService
      .deleteRoute(route.id)
      .then(() => {
        this.routes = this.routes.filter(h => h !== route);
        if (this.selectedRoute === route) {
          this.selectedRoute = null;
        }
      });
  }

  add(name: string, vehicleId: number, rt: string): void {
    name = name.trim();

    rt = rt.trim();
    if (!name && !vehicleId && !rt) {
      return;
    }
    this.appService.createRoute(name, vehicleId, rt)
      .then(route => {
        this.routes.push(route);
        this.selectedRoute = null;
      });
  }
  ngOnInit(): void {
    this.getRoutes();
  }

  onSelect(route: Route): void {
    this.selectedRoute = route;
  }

  refresh(): void {
    window.location.reload();
  }

  gotoDetail(route: Route): void {
    this.router.navigate(['/routes', route.id]);
  }
}
