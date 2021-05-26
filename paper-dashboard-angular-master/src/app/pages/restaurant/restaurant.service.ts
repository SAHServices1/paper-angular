// import { RestaurantComponent } from './../../restaurant/restaurant.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  baseUrl: string = "https://10.0.115.117:9003/country";
  // http: any;

  constructor(private _http: HttpClient) { }

  public getData(){
    return this._http.get("http://10.0.115.117:9003/country", {
      observe: 'response'
    })
  }

  public create(countryName: string){
    return this._http.post('http://10.0.115.117:9003/country', {
      "countryName": countryName
    }, {
      observe: 'response'
    })
  }

}
