import { constant, RESPONSE } from './../constant/constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private _httpClient:HttpClient) { }

  getAllCompany(){
    return this._httpClient.get<RESPONSE>(constant.API+'company',{
      observe: 'response'
    });
  }

  getCompanyByID(id:number){
    return this._httpClient.get<RESPONSE>(constant.API+'company'+id,{
      observe:'response'
    })
  }
}
