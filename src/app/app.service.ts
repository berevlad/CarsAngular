import {Injectable} from '@angular/core';

import {Route} from './route';
import {Logs} from './logs';
import {User} from './user';
import {Vehicle} from './vehicle';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import {Http, Headers} from '@angular/http';


@Injectable()
export class AppService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private logsUrl = 'http://localhost:8090/logs';
  private routesUrl = 'http://localhost:8090/routes';
  private usersUrl = 'http://localhost:8090/users';
  private vehicleUrl = 'http://localhost:8090/vehicles';
  private controlcarUrl= 'http://192.168.216.229:8090/api/move';

  constructor(private http: Http) {

  }

                                                           // -----------LOGS-----------


  getLogs(): Promise<Logs[]> {
    return this.http.get(this.logsUrl)
      .toPromise()
      .then(response => response.json() as Logs)
      .catch(this.handleError);
  }

  getLog(id: number): Promise<Logs> {
    const url = `${this.logsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Logs)
      .catch(this.handleError);
  }

  deleteLog(id: number): Promise<void> {
    const url = `${this.logsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  createLog(userId: string, vehicleId: string): Promise<Logs> {
    return this.http
      .post(this.logsUrl, JSON.stringify({userId: userId, vehicleId: vehicleId}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Logs)
      .catch(this.handleError);
  }

  updateLog(logs: Logs): Promise<Logs> {
    const url = `${this.logsUrl}/${logs.id}`;
    return this.http
      .put(url, JSON.stringify(logs), {headers: this.headers})
      .toPromise()
      .then(() => logs)
      .catch(this.handleError);
  }

                                                               // -----------ROUTES-----------


  getRoutes(): Promise<Route[]> {
    return this.http.get(this.routesUrl)
      .toPromise()
      .then(response => response.json() as Route[])
      .catch(this.handleError);
  }

  getRoute(id: number): Promise<Route> {
    const url = `${this.routesUrl}/${id}`;

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Route)
      .catch(this.handleError);
  }

  createRoute(name: string, vehicleId: number, rt: string): Promise<Route> {
    return this.http
      .post(this.routesUrl, JSON.stringify({name: name, vehicleId: vehicleId, rt: rt}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Route)
      .catch(this.handleError);
  }

  deleteRoute(id: number): Promise<void> {
    const url = `${this.routesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateRoute(route: Route): Promise<Route> {
    const url = `${this.routesUrl}/${route.id}`;
    return this.http
      .put(url, JSON.stringify(route), {headers: this.headers})
      .toPromise()
      .then(() => route)
      .catch(this.handleError);
  }

                                                                  // -----------USERS-----------


  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    return this.getUsers()
      .then(users => users.find(user => user.id === id));
  }

  deleteUser(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  createUser(firstName: string, lastName: string, password: string,
             email: string): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify({
        firstName: firstName, lastName: lastName, password: password,
        email: email
      }), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as User)
      .catch(this.handleError);
  }

  updateUser(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

                                                                     // -----------VEHICLES-----------


  getVehicles(): Promise<Vehicle[]> {
    return this.http.get(this.vehicleUrl)
      .toPromise()
      .then(response => response.json() as Vehicle[])
      .catch(this.handleError);
  }

  getVehicle(id: number): Promise<Vehicle> {
    return this.getVehicles()
      .then(vehicles => vehicles.find(vehicle => vehicle.id === id));
  }

  deleteVehicle(id: number): Promise<void> {
    const url = `${this.vehicleUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateVehicle(vehicle: Vehicle): Promise<Vehicle> {
    const url = `${this.vehicleUrl}/${vehicle.id}`;
    return this.http
      .put(url, JSON.stringify(vehicle), {headers: this.headers})
      .toPromise()
      .then(() => vehicle)
      .catch(this.handleError);
  }

  createVehicle(name: string, vehicleId: string): Promise<Vehicle> {
    return this.http
      .post(this.vehicleUrl, JSON.stringify({name: name, vehicleId: vehicleId}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Vehicle)
      .catch(this.handleError);
  }


  moveleft(): Promise<Route> {
    const url = `${this.controlcarUrl}/left`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Route)
      .catch(this.handleError);
  }

  moveforward(): Promise<Route> {
    const url = `${this.controlcarUrl}/forward`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Route)
      .catch(this.handleError);
  }

  moveright(): Promise<Route> {
    const url = `${this.controlcarUrl}/right`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json() as Route)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
