import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit{

  _restaurant: any = "";
  _restaurant1: any ="";
  // countryNAme: any = '';
  countryName: any = "";

  constructor(private _restaurantService : RestaurantService) { }

  ngOnInit(){
    this._restaurantService.getData().subscribe((data) => {
      this._restaurant = data.body;
      console.log(this._restaurant);},
      (error) => {
        console.log(error);
      })
    }

    postCountry(){
      this._restaurantService.create(this.countryName).subscribe((data)=>{
        console.log(data.body)
      }, (error)=>{
        console.log(error);
      })
    }

}
