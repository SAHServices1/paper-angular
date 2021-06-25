import { constant } from './../../constant/constant';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'user-cmp',
  moduleId: module.id,
  templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
  UserID: any = '';
  cardBool: any = false;

  constructor(private _userService: UserService,
    private router: Router,
    private toastr: ToastrService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: any;
  displayedColumns: String[] = ['id', 'profileImage', 'firstName', 'lastName', 'mobileNo',
    'industryType', 'compName', 'companyEmail', 'countryName', 'status', 'action'];

    baseUrl : any = constant.API + 'images/';
  ngOnInit() {
    this._userService.getUserData().subscribe((data) => {
      console.log(data.body.object);
      this.dataSource = new MatTableDataSource(data.body.object);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(userid){
    this._userService.getUSerByID(userid).subscribe((data)=>{
      console.log(data.body.object);
      this.UserID = data.body.object;
    });
    this.cardBool = true;
  }

}
