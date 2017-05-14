import { Team } from './../../models/team.model';
import { ModelService } from './../../services/model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  teams = this.modelService.potentialTeams;

  constructor(
    private modelService: ModelService
  ) { }

  ngOnInit() {
  }

  onCollaborateClicked(selectedTeam: Team) {
    alert('Odabrali ste: ' + selectedTeam.name);
  }
}
