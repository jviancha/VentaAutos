import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleAutoGuard implements CanActivate {
  constructor( private route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id= Number(route.paramMap.get('id'));
    if (isNaN(id) || id<0) {
      alert("Id invaálido: " +id);
      this.route.navigate(['/autos']);
    }
      return true;
  }
  
}
