import {Component, OnInit} from '@angular/core';
import {LibService} from "../../../shared/service/lib.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private libservice: LibService) {
  }


  loginDetails(userDetails) {
    console.log('userdetails', userDetails);
    this.libservice.login(userDetails).subscribe((resp) => {
      console.log('resp', resp);
    });
  }

  ngOnInit() {
  }

}
