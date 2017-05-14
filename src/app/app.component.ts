import { ModelService } from './services/model.service';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ///////////////////////////////////////////////////
  public testing: boolean = false;
  //////////////////////////////////////////////////
  currentUser: User = undefined;
  constructor (private modelService: ModelService) { }

  ngOnInit() {

  }
}
