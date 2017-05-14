import { Component, OnInit } from '@angular/core';
import { ModelService } from '../services/model.service';
import { User } from '../models/user.model';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-teamspage',
  templateUrl: './teamspage.component.html',
  styleUrls: ['./teamspage.component.css']
})
export class TeamspageComponent implements OnInit {

  // teams: Team[] = this.modelService.getMyTeams();
  teams: Team[] = this.modelService.potentialTeams;
  constructor(
    private modelService: ModelService
  ) { }

  ngOnInit() {
  }

  

}
