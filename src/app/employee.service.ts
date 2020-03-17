import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';//Step 1 since 21. Fetching data using HTTP
import { Observable } from 'rxjs/Observable';
import { IEmployee } from './employee';
//Step 1: HTTP gets request from empservice
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()//tell the angular that this service may have injector. It is a must
export class EmployeeService {

  private _url: string = "/assets/data/employees.json"//Change this url, we will get the error message 404 Not Found

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .catch(this.errorHandler)            
  }

  errorHandler(error: HttpErrorResponse ){
    return Observable.throw(error.message || "Server error")
  }
}
