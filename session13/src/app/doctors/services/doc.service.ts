import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocService {
  commonApiUrl = "http://medical.mind-techs.com/api/auth/"
  langId = 1
  startIndex=0
  countOnPage=10
  constructor(private _http:HttpClient) { }

  getAllRoles():Observable<any>{
    return this._http.get(`${this.commonApiUrl}roles/${this.langId}`);
  }
  getAllProviders(slug:any):Observable<any>{
    return this._http.post(`${this.commonApiUrl}LoadProvidersBySlug/${this.langId}/${this.startIndex}/${this.countOnPage}`, {"role_id":slug})
  }
  getSingleProvider(slug:any):Observable<any>{
    return this._http.get(`${this.commonApiUrl}SingleDatabySlug/${slug}/${this.langId}`)
  }
}
