import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../register';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient){
    
  }
getAllUsers():Observable<any>{
  return this._http.get('https://reqres.in/api/users?page=1');
}


handleContact(register:Register):Observable <any>{
  return this._http.post('http://upskilling-egypt.com:3000/contact',register);
  }
}
