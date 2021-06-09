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

  constructor(private _userService: UserService,
    private router: Router,
    private toastr: ToastrService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: any;
  displayedColumns: String[] = ['id', 'profileImage', 'firstName', 'lastName', 'mobileNo',
    'industryType', 'compName', 'companyEmail', 'countryName', 'status'];
  ngOnInit() {
    this._userService.getUserData().subscribe((data) => {
      console.log(data.body.object);
      this.dataSource = new MatTableDataSource(data.body.object);
      this.dataSource.paginator = this.paginator;
    })
  }

}
