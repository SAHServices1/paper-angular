import { RESPONSE } from './../constant/constant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public postData(businessEmail, password) {
    return this.httpClient.post<RESPONSE>('http://10.0.115.71:9002/users/login', {
      "businessEmail": businessEmail,
      "password": password
    }, {
      observe: 'response'
    })
  }

  // public registerUser(profileImage, firstName, lastName, businessEmail, password,
  //   mobileNo, address, industryType, city, postalCode, status, role, admin, company, country){
  //   return this.httpClient.post<RESPONSE>('http://10.0.115.71:9002/users',{
  //     "profileImage" : profileImage,
  //     "firstName" : firstName,
  //     "lastName" : lastName,
  //     "businessEmail" : businessEmail,
  //     "password" : password, "mobileNo" : mobileNo,
  //     "address" : address, "industryType" : industryType,
  //     "city" : city, "postalCode" : postalCode, "status" : status,
  //     "role" : role, "admin" : admin, "company" : company, "counttry" : country},{
  //       observe : 'response'
  //     })
  // }
}
