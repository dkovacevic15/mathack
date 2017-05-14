import { ModelService } from './../../../services/model.service';
import { Team } from './../../../models/team.model';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-teamcard',
  templateUrl: './teamcard.component.html',
  styleUrls: ['./teamcard.component.css']
})
export class TeamcardComponent implements OnInit {

  @Input() team: Team;

  constructor(
    private modelService: ModelService
  ) { }

  ngOnInit() { }

  onCollaborateClicked() {
    this.modelService.attemptMatch(this.team);
  }

  onDismissClicked(selectedTeam: Team) {
    this.modelService.dismiss(this.team);
  }
}
