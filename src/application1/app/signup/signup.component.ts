import {Component, OnInit}            from '@angular/core';
import {LibService}                   from '../../../shared/service/lib.service';
import {Event, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private libservice: LibService) {
  }

  signUpDetails(signUpData) {
    console.log('signupdata', signUpData);
    this.libservice.signUp(signUpData).subscribe((resp: any) => {
      if (resp) {
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  }

}
