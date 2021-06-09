import { RESPONSE, constant } from './../constant/constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public postData(businessEmail, password) {
    return this.httpClient.post<RESPONSE>(constant.API+'users/login', {
      "businessEmail": businessEmail,
      "password": password
    }, {
      observe: 'response'
    })
  }
}
