import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {
  public signedIn: boolean = false;

  public authKey: any;
  
  authUrl = 'localhost:5000';

  constructor(private http: Http) { }
  
  signUp(user: User): boolean {
    let headers = new Headers({'Content-Type': 'form-data'});
    let options = new RequestOptions({headers: headers});
    let form_data = new FormData();
    form_data.append('username', user.username);
    form_data.append('pass', user.password);
    form_data.append('name', user.firstName);
    form_data.append('lastName', user.lastName);
    form_data.append('email', user.email);
    let success: boolean;
    this.http
        .post(this.authUrl, form_data, options)
          .subscribe(
            data => {
                success = data.ok;
                if (data.ok) {
                  alert('User was registered');
                } else {
                  alert('Error, user not registered');
                } 
              },
            error => {
              console.log(JSON.stringify(error.json()));
          });
    return success;
  }

  signIn(email: string, password: string): boolean {
    return false;
  }

  signOut() {
    this.signedIn = false;
  }



}
