import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public signedIn: boolean = true;
  public authKey: any;

  signUp(email: string, password: string): boolean {
    return false;
  }

  signIn(email: string, password: string): boolean {
    return false;
  }

  signOut() {
    
  }

  constructor() { }

}
