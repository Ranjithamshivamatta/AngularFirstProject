import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Login } from '../model/login';
import { environment } from 'src/environments/environment';
import { Register } from '../model/register';
import { Note } from '../model/note';


@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {

  constructor(private http: HttpClient) { }
  private httpheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
     })
  };

  public login(config: Login): Observable<any> {
   return this.http.post<any> (`${environment.base_url}login`, config, {observe: 'response'});
  }
  public register(config: Register): Observable<any> {
    return this.http.post<any> (`${environment.base_url}registration`, config, {observe: 'response'});
   }
   public note(config: Note): Observable<any> {
    return this.http.post<any> (`${environment.base_url}note`, config, {observe: 'response'});
   }
}
