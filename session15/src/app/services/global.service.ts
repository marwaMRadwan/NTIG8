import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  commonUrl = `http://localhost:3000/user/`
  constructor(private _http:HttpClient) { }

  login(user:any):Observable<any>{
    return this._http.post(`${this.commonUrl}login`, user)
  }
}
