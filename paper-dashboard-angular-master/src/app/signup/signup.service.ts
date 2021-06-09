import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESPONSE } from './../constant/constant';
import { constant } from "./../constant/constant";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient: HttpClient) { }


  registerUser(profileImage: File, firstName, lastName, businessEmail, password,
    mobileNo, address, industryType, city, postalCode, status, role, admin, company, country) {
    var _form = new FormData();
    _form.append("profileImage", profileImage);
    _form.append("firstName", firstName);
    _form.append("lastName", lastName);
    _form.append("businessEmail", businessEmail);
    _form.append("password", password);
    _form.append("mobileNo", mobileNo);
    _form.append("address", address);
    _form.append("industryType", industryType);
    _form.append("city", city);
    _form.append("postalCode", postalCode);
    _form.append("status", status);
    _form.append("role", role);
    _form.append("admin", admin);
    _form.append("company", company);
    _form.append("country", country);
    console.log(_form);
    return this.httpClient.post<RESPONSE>(constant.API + 'users', _form, {
      observe: 'response'
    })
  }

  getCountryDetail() {
    return this.httpClient.get<RESPONSE>(constant.API + 'country', {
      observe: 'response'
    })
  }

  getCompany(){
    return this.httpClient.get<RESPONSE>(constant.API+'company',{
      observe: 'response'
    })
  }

  getRole(){
    return this.httpClient.get<RESPONSE>(constant.API+'role',{
      observe: 'response'
    })
  }

  getAdmin(){
    return this.httpClient.get<RESPONSE>(constant.API+'admin',{
      observe: 'response'
    })
  }
}

