import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuService } from './menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  Roles: any = '';
  role: any = '';

  constructor(private _menuService:MenuService,
    private toastr:ToastrService,
    private router:Router) { }

  ngOnInit(){
    this._menuService.getRole().subscribe((data)=>{
      this.Roles = data.body.object;
      console.log(this.Roles);
    })
  }



}
