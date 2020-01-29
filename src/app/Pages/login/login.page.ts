import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string;
  pass: string;
  islogged: boolean;
  constructor() { }

  Signup(){
    console.log('login');
  }

  ngOnInit() {
  }

}
