import { constant, RESPONSE } from './../constant/constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private _httpClient:HttpClient) { }

  getRole(){
    return this._httpClient.get<RESPONSE>(constant.API+'role',{
      observe: 'response'
    })
  }

  
 
}
