import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  file: File = null;
  selectCountry: any = '';
  selectCompany: any = '';
  selectRole: any = '';
  selectAdmin: any = '';
  // intlTelInput: any = '';
  profileImage: any ='';
  firstName:any = '';
  lastName: any = '';
  businessEmail: any= '';
  password: any= '';
  mobileNo: any= '';
  address: any= '';
  industryType: any= '';
  city: any= '';
  postalCode: any= '';
  status: any= '';
  role: any= '';
  admin:any='';
  company: any= '';
  country: any= '';
  _data:any = '';
  CountryList: any = '';
  CompanyList: any = '';
  Roles: any = '';
  Admin: any = '';

  constructor(private _signupService: SignupService,
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit() {
    this._signupService.getCountryDetail().subscribe((data)=>{
      this.CountryList = data.body.object;  
      console.log(this.CountryList);
    })

    this._signupService.getCountryDetail().subscribe((data)=>{
      this.CountryList = data.body.object;  
      console.log(this.CountryList);
    })

    this._signupService.getCompany().subscribe((data)=>{
        this.CompanyList = data.body.object;
        console.log(this.CompanyList);
    })

    this._signupService.getRole().subscribe((data)=>{
      this.Roles = data.body.object;
      console.log(this.Roles);
    })

    this._signupService.getAdmin().subscribe((data)=>{
      this.Admin = data.body.object;
      console.log(this.Admin);
    })
  }

  register() {
    this._signupService.registerUser(this.file, this.firstName,this.lastName,this.businessEmail,this.password
      ,this.mobileNo,this.address,this.industryType,this.city,this.postalCode,this.status,this.role,this.admin,
      this.company,this.country).subscribe((data) => {
        this._data = data.body
        if (data.body.code === 1) {
          this.router.navigate(['dashboard']);
        }
        else {
          this.toaster.info(
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
      }, (error) => {
        console.log(error);
      })
  }

  fileChange(event: { target: { files: File[]; }; }) {
    this.file = event.target.files[0];
  }
}
