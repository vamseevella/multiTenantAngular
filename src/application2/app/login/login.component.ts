import {Component, OnInit}            from '@angular/core';
import {LibService}                   from '../../../shared/service/lib.service';
import {Event, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private libservice: LibService) {
  }

  loginDetails(userDetails) {
    console.log('userdetails', userDetails);
    this.libservice.login(userDetails).subscribe((resp: any) => {
      if (resp.data) {
        sessionStorage.setItem('userId', resp.data._id);
        sessionStorage.setItem('token', resp.data.token);
        this.router.navigate(['/personal-details']);
      }
    });
  }

  ngOnInit() {
  }

}
