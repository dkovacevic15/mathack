import { NgForm } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mySource = [
    'Ovo',
    'Je',
    'Niz',
    'Rezultata'
  ]

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {

  }

  clickedHome() {
    alert('Clicked home!');
  }

  clickedTeams() {
    alert('Clicked teams');
  }

  signedIn() {
    return this.authService.signedIn;
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
  }
}
