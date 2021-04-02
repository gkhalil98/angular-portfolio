import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  model: any = {};

  ngOnInit() :void {
  }

  onRegister(registerForm: any) {
    let username = registerForm.value.username;
    let password = registerForm.value.password;
    localStorage.setItem(username, password);
    this.router.navigate(["login"]);
  }

}
