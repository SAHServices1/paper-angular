import { Router } from '@angular/router';
declare var jQuery: any;
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private _loginService: LoginService,
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit() {
    //on load

  }

  clickMe() {
    //onCLick

  }

  userLogin(email, password) {
    if (email === '') {
      this.toaster.info(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"> Email shouldn\'t be null. </span>',
        "",
        {
          timeOut: 2000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-danger alert-dismissible fade show",
          positionClass: "toast-top-right"
        }
      );
    }
    else if (password === '') {
      this.toaster.info(
        '<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message"> Password shouldn\'t be null. </span>',
        "",
        {
          timeOut: 2000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-danger alert-dismissible fade show",
          positionClass: "toast-top-right"
        }
      );
    }
    else {
      this._loginService.getData(email, password).subscribe((data) => {
        console.log(data.body);

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
  }
}
