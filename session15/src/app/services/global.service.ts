import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public loginFlag = false
  commonUrl = `http://medical.mind-techs.com/api/auth/`
  constructor(private _http:HttpClient) { }

  login(user:any):Observable<any>{
    return this._http.post(`${this.commonUrl}login`, user)
  }
  me():Observable<any>{
    return this._http.post(`${this.commonUrl}me`,{"lang" : 1})
  }

  updateFileUser(data:any):Observable<any>{
    return this._http.post('http://medical.mind-techs.com/api/auth/updatePatientFile',data)
  }
  loadAllDocs(pageNum:any):Observable<any>{
    return this._http.post(`http://medical.mind-techs.com/api/auth/LoadProviders/1/${pageNum}/10`, {role_id:3})
  }
  

}
