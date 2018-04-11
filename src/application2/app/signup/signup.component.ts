import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() {
  }

  signUpDetails(signUpData) {
    console.log('signupdata', signUpData);
  }

  ngOnInit() {
  }

}
