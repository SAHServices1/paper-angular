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

  signupButton: any = '';
  loginButton: any = '';
  userForms: any = '';
  valid: any = '';

  first: any = true;
  second: any = false;
  third: any = false;
  fourth: any = false;
  fifth: any = false;
  // first_name: any = '';

  constructor(private _loginService: LoginService,
    private router: Router,
    private toaster: ToastrService) { }

  ngOnInit() {
    this.signupButton = document.getElementById('signup-button'),
      this.loginButton = document.getElementById('login-button'),
      this.userForms = document.getElementById('user_options-forms')
  }

  clickMe() {
    //onCLick

  }

  // signupShuffle() {
  //   this.signupButton.addEventListener('click', () => {
  //     this.userForms.classList.remove('bounceRight')
  //     this.userForms.classList.add('bounceLeft')
  //   }, false)
  // }

  // loginShuffle() {
  //   this.loginButton.addEventListener('click', () => {
  //     this.userForms.classList.remove('bounceLeft')
  //     this.userForms.classList.add('bounceRight')
  //   }, false)
  // }


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
      this._loginService.postData(email, password).subscribe((data) => {
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
