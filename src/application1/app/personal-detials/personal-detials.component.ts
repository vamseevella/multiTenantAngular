import {Component, OnInit} from '@angular/core';
import {LibService} from '../../../shared/service/lib.service';

@Component({
  selector: 'app-personal-detials',
  templateUrl: './personal-detials.component.html',
  styleUrls: ['./personal-detials.component.css']
})
export class PersonalDetialsComponent implements OnInit {

  constructor(private libService: LibService) {
  }

  submitPersonalDetails(details) {
    console.log('details', details);
    this.libService.createPersonalDetailsForUser(details).subscribe((resp) => {
      console.log('response', resp);
    });
  }

  ngOnInit() {
  }

}
