// // import { Injectable } from '@angular/core';
// // tslint:disable-next-line: max-line-length
// tslint:disable-next-line: max-line-length
// // import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
// // import { Observable } from 'rxjs';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
// //   canActivate(
// //     next: ActivatedRouteSnapshot,
// //     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// //     return true;
// //   }
// //   canActivateChild(
// //     next: ActivatedRouteSnapshot,
// //     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
// //     return true;
// //   }
// //   canLoad(
// //     route: Route,
// //     segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
// //     return true;
// //   }
// // }



// import { Injectable } from '@angular/core';
// // tslint:disable-next-line: max-line-length
// tslint:disable-next-line: max-line-length
// import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
//   constructor(private myRoute: Router) { }

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//           if (localStorage.getItem('token') != null) {
//             return true;
//           } else {
//             this.myRoute.navigate(['login']);
//             return false;
//           }
// }
//   canActivateChild(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
//   canLoad(
//     route: Route,
//     segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
//     return true;
//   }
// }
