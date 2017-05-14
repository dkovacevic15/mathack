import { ModelService } from './../../../services/model.service';
import { Team } from './../../../models/team.model';
import { Component, OnInit, Input } from '@angular/core';

// Animacije
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-teamcard',
  templateUrl: './teamcard.component.html',
  styleUrls: ['./teamcard.component.css'],
  animations: [
    trigger('this.team', [//this.modelService.potentialTeams.indexOf(this.team)>-1', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(0.1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
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
