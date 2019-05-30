import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private httpheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     })
  };

  public login(config: User): Observable<any> {
   return this.http.post<any> (`${environment.base_url}login`, config, {observe: 'response'});
  }
  public register(config: User): Observable<any> {
    return this.http.post<any> (`${environment.base_url}registration`, config, {observe: 'response'});
   }
  //  public note(config: Note): Observable<any> {
  //   return this.http.post<any> (`${environment.base_url}note`, config, {observe: 'response'});
  //  }
}




// import { Injectable } from '@angular/core';

// import { environment } from 'src/environments/environment';
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material';
// import { Observable } from 'rxjs';
// import { HttpHeaders } from '@angular/common/http';
// import { UtilService } from './util.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   public token = localStorage.getItem('token');
//   public httpheaders() {
//     // console.log("localStorage.getItem('token')::", localStorage.getItem('token'));
//     return {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         token: localStorage.getItem('token')
//       })
//     };
//   }

//   constructor(private httpUtil: UtilService, private router: Router, public snackBar: MatSnackBar) { }

//   login(user) {
//     return this.httpUtil.postService(environment.base_url + 'login', user);
//   }

//   register(user) {
//     return this.httpUtil.postService(environment.base_url + 'register', user);
//   }

//   forgotPassword(user) {
//     return this.httpUtil.postService(environment.base_url + 'forgotpassword', user);
//   }

//   resetPassword(user, id) {
//     return this.httpUtil.putService(environment.base_url + 'resetpassword/' + id, user, id);
//   }

//   colaborator(): Observable<any> {
//     return this.httpUtil.getService(environment.base_url + 'colaborator', this.httpheaders());
//   }

//   // uploadImage(file): Observable<any> {
//   //   const formdata = new FormData();
//   //   formdata.append('file', file);
//   //   return this.httpUtil.postToUploadImage(environment.base_url + 'photo/' + this.token, formdata, {
//   //     reportProgress: true,
//   //     responseType: 'text'
//   //   }
//   //   );
//   // }

//   // downloadImage(): Observable<any> {
//   //   return this.httpUtil.getService(environment.base_url + 'photo', this.httpheaders());
//   // }

//   // removeImage() {
//   //   return this.httpUtil.deleteService(environment.base_url + 'photo', this.httpheaders());
//   // }

//   getUsers(): Observable<any> {
//     return this.httpUtil.getService(environment.base_url + 'allusers', { observe: 'response' });
//   }

//   verifyEmail(email): Observable<any> {
//     return this.httpUtil.getUserEmail(environment.base_url + 'verifyemail/' + email, this.httpheaders());
//   }

//   getCollaborateUser(userId): Observable<any> {
//     return this.httpUtil.getCollaborateUser(environment.base_url + 'collaborateduser/' + userId);
//   }
// }
