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
  updateUserId: any = '';
  cardBool: any = true;
  cardBool1: any = false;
  cardBool2: any = false;
  fisrtName: any = '';
  lastName: any = '';
  mobileNo: any = '';
  address: any = '';
  baseUrl: any = constant.API + 'images/';


  constructor(private _userService: UserService, 
    private router: Router,
    private toastr: ToastrService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: any;
  displayedColumns: String[] = ['id', 'profileImage', 'firstName', 'lastName', 'mobileNo',
    'industryType', 'compName', 'companyEmail', 'countryName', 'status', 'action'];

  ngOnInit() {
    this._userService.getUserData().subscribe((data) => {
      console.log(data.body.object);
      this.dataSource = new MatTableDataSource(data.body.object);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(userid) {
    this._userService.getUSerByID(userid).subscribe((data) => {
      console.log(data.body.object);

      this.cardBool1 = true;
      this.cardBool = false;
      this.cardBool2 = false;
      this.UserID = data.body.object;
    });
    this.cardBool = true;
  }


  openDialog1(userid) {
    this._userService.getUSerByID(userid).subscribe((data) => {
      this.cardBool1 = false;
      this.cardBool = false;
      this.cardBool2 = true;
      this.UserID = data.body.object;
    });
    this.cardBool = true;
  }

  openDialogUpdate(id, firstName, lastName, mobileNo, city, address) {
    this._userService.updateUserByID(id, firstName, lastName, mobileNo, city, address).subscribe((data) => {
      console.log(data.body.object);
      console.log(id, firstName, lastName, mobileNo, city, address)
      this.cardBool1 = false;
      this.cardBool = false;
      this.cardBool2 = true;
      this.updateUserId = data.body.object;
      if (data.body.code == 1) {
        this.router.navigate(['user']);
      } else {
        this.toastr.info(
          '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"> ' + data.body.message + '</span>',
          "",
          {
            timeOut: 2000,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-info alert-with-icon",
            positionClass: "toast-top-right"
          }
        );
      }
    });
    this.cardBool = true;
    // console.log(id);
    // console.log(firstName);
    // console.log(lastName);
    // console.log(mobileNo);
    // console.log(city);
    // console.log(address);
  }

}
