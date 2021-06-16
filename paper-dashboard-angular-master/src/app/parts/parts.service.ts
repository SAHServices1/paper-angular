import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant, RESPONSE } from 'app/constant/constant';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor(private _httpClient:HttpClient) { }

  getParts(){
    return this._httpClient.get<RESPONSE>(constant.API + 'parts',{
      observe: 'response'
    })
  }

  getPartsByID(){
    return this._httpClient.get<RESPONSE>(constant.API + 'parts', {
      observe: 'response'
    })
  }
}
