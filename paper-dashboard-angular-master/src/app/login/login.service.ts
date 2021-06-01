import { RESPONSE } from './../constant/constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public getData(businessEmail, password) {
    return this.httpClient.post<RESPONSE>('http://10.0.115.71:9002/users/login', {
      "businessEmail": businessEmail,
      "password": password
    }, {
      observe: 'response'
    })
  }
}
