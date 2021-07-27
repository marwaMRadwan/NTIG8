import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // public x = [1,2,3]
  mainRoute="https://jsonplaceholder.typicode.com/posts"
  constructor(private _http:HttpClient) {}

  getAllPost():Observable<any>{
    return this._http.get(`${this.mainRoute}`)
  }

  getSinglePost(id:any):Observable<any>{
    return this._http.get(`${this.mainRoute}/${id}`)
  }

}
