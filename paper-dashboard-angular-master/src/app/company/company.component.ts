import { constant } from './../constant/constant';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CompanyService } from './company.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  isChecked = false;
  CompnayByID: any = '';
  cardBool: any = false;

  constructor(private _companyService: CompanyService,
    private router: Router,
    private toastr: ToastrService,
    public dialog: MatDialog) { }

    @ViewChild(MatPaginator) paginator: MatPaginator;

    dataSource: any;
  displayedColumns: String[] = ['compId', 'compName', 'companylogo', 'companyTitle',
   'companyDescription', 'companyEmail', 'companyContact', 'action'];

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

  openDialog(compid){
    this._companyService.getCompanyByID(compid).subscribe((data)=>{
      console.log(data.body.object);
      this.CompnayByID = data.body.object;
    })
    this.cardBool = true;
    // alert(compid);
  }

  // openDialog(action,obj) {
  //   obj.action = action;
  //   const dialogRef = this.dialog.open(DialogBoxComponent, {
  //     width: '250px',
  //     data:obj
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result.event == 'Add'){
  //       this.viewRowData(result.data);
  //     }
  //   });
  // }

  // viewRowData(row_obj){
  //   var d = new Date();
  //   this.dataSource.push({
  //     id:d.getTime(),
  //     name:row_obj.name
  //   });
  //   this.dataSource.renderRows();

  // }
}
