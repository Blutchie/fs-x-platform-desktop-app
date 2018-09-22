import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  private baseUrl:string = 'http://localhost:34543/api/';
  constructor(public http: HttpClient) {
  }

  Get(path: string)
  {
    return this.http.get(this.baseUrl + path);
  }
}
