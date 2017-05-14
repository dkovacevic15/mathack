import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public signedIn: boolean = true;

  public authKey: any;
  
  authUrl = 'localhost';

  constructor(private http: Http) { }
  
  signUp(email: string, password: string): Promise<boolean> {
    let headers = new Headers({'Content-Type': 'form-data'});
    let options = new RequestOptions({headers: headers});
    let form_data = new FormData();
    // form_data.append('username', );
    // form_data.append('pass', password);
    // form_data.append('name', );
    // form_data.append('lastName', );
    // form_data.append('email', email);
    return null;
  }

  signIn(email: string, password: string): boolean {
    return false;
  }

  signOut() {
    this.signedIn = false;
  }



}
