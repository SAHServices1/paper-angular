import { constant, RESPONSE } from './../../constant/constant';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient:HttpClient) { }

  getUserData(){
    return this._httpClient.get<RESPONSE>(constant.API+'users',{
      observe: 'response'
    });
  }
}
