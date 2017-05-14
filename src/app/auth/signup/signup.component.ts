import { User } from './../../models/user.model';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const user = new User(
      form.value.username,
      0,
      0,
      0,
      form.value.email,
      form.value.password,
      '2515309',
      [],
      form.value.firstName,
      form.value.lastName
    );
    this.authService.signUp(user);
  }
}
