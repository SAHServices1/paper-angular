import { constant } from './../constant/constant';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CompanyService } from './company.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private _companyService: CompanyService,
    private router: Router,
    private toastr: ToastrService) { }

    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource: any;
  displayedColumns: String[] = ['compId', 'compName', 'companylogo', 'companyTitle',
   'companyDescription', 'companyEmail', 'companyContact'];

   baseUrl: any = constant.API + 'images/';

  ngOnInit() {
    this._companyService.getAllCompany().subscribe((data)=>{
      console.log(data.body.object);
      this.dataSource = new MatTableDataSource(data.body.object);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
