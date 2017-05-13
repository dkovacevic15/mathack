import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public signedIn: boolean = false;
  public authKey: any;

  signUp(email: string, password: string) {

  }

  signIn(email: string, password: string) {
    
  }

  signOut() {
    
  }

  constructor() { }

}
