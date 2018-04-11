import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LibService {
  constructor(private http: HttpClient) {
  }

  login(userDetails) {
    console.log('userDetails', userDetails);
    return this.http.post('/loginUser', userDetails);
  }

  signUp(signUpDetails) {
    console.log('signUpDetails', signUpDetails);
    return this.http.post('/createUser', signUpDetails);
  }

  createPersonalDetailsForUser(personalDetails) {
    console.log('personal details', personalDetails);
    return this.http.post('CreatePersonalInfo', personalDetails);
  }
}
