import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public signedIn: boolean = true;

  public authKey: any;
  
  authUrl = 'localhost';

  constructor(private http: Http) { }
  
  signUp(user: User): Promise<boolean> {
    let headers = new Headers({'Content-Type': 'form-data'});
    let options = new RequestOptions({headers: headers});
    let form_data = new FormData();
    return null;
  }

  signIn(email: string, password: string): boolean {
    return false;
  }

  signOut() {
    this.signedIn = false;
  }



}
