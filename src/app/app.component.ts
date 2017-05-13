import { ModelService } from './services/model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  currentUser: User = undefined;
  constructor (private modelService: ModelService) { }

  ngOnInit() {

  }
}
