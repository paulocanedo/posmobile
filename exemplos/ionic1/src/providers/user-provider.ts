import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http) {

  }

  getUsers() {
    var url = 'https://randomuser.me/api/';
    return this.http.get(url).map(response => response.json());
  }

}
