import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SService } from './s.service';

@Injectable({
  providedIn: 'root'
})
export class MyGGuard implements CanActivate {
  constructor(private s:SService, private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
if(!this.s.loginStatus){
  alert('you didn\'t has permission')
  // this._router.navigateByUrl('/login?error=notAuth')
  this._router.navigate(["login"], {queryParams: { err: "notAuth"}})
  
return false
}
 return true;
  }
  
}
