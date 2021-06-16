import { constant } from './../constant/constant';
import { ToastrService } from 'ngx-toastr';
import { PartsService } from './parts.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  PartsList: any = '';
  part: any = '';
  Parts: any = '';

  constructor(private _partsService:PartsService,
    private router:Router,
    private toastr:ToastrService) { }

    @ViewChild(MatPaginator) paginator : MatPaginator;

    dataSource: any = '';
    displayedColumns: String[] = ['partId', 'partImage', 'partTitle', 'partDescription',
    'partNumber', 'partQuantity', 'partPrice'];

  baseUrl: any = constant.API + '/images/';

  ngOnInit(){
    this._partsService.getParts().subscribe((data)=>{
      console.log(data.body.object);
      this.dataSource = new MatTableDataSource(data.body.object);
      this.dataSource.paginator = this.paginator;
    })

    this._partsService.getPartsByID().subscribe((data)=>{
      this.PartsList = data.body.object;
      console.log(this.PartsList);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}

