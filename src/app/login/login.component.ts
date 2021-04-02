import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg:string="";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  checkUser(loginForm: any) {
    let user1=loginForm.username;
    let pass1=loginForm.password;
    let data = localStorage.getItem(user1);

    if (pass1 == data) {
      this.msg="Successful Login"
    }
    else {
      this.msg = "Login failed, please check your credentials and try again."
    }
    this.router.navigate(["portfolio"]);
  }

}
