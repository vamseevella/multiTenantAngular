import {Component, OnInit} from '@angular/core';
import {LibService}        from '../../../shared/service/lib.service';

@Component({
  selector: 'app-personal-detials',
  templateUrl: './personal-detials.component.html',
  styleUrls: ['./personal-detials.component.css']
})
export class PersonalDetialsComponent implements OnInit {
  personalInfo: any;

  constructor(private libService: LibService) {
  }

  ngOnInit() {
    this.getPersonalDetails();
  }

  submitPersonalDetails(details) {
    details.userId = sessionStorage.getItem('userId');
    details.token = sessionStorage.getItem('token');
    console.log('details', details);
    this.libService.createPersonalDetailsForUser(details).subscribe((resp: any) => {
      console.log('response', resp);
      if (resp.data)
        this.personalInfo = resp.data;
    });
  }

  getPersonalDetails() {
    let data = {
      userId: sessionStorage.getItem('userId'),
      token: sessionStorage.getItem('token')
    };
    this.libService.getPersonalData(data).subscribe((res: any) => {
      if (res.data)
        this.personalInfo = res.data;
    });
  }

}
