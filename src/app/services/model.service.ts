import { TeamMember } from './../models/teamMember.model';
import { Skill } from './../models/skill.model';
import { User } from './../models/user.model';
import { Team } from './../models/team.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {

  public ownedTeams: Team[];
  public joinedTeams: Team[];

  public user: User
  = new User(
    'dukicar',
    0,
    0,
    0,
    'dusankovacevic95@gmail.com',
    'sifra',
    '2515-309',
    [
      new Skill(
        'Angular (sorta)',
        1
      ),
      new Skill(
        'Being a faggot',
        2
      )
    ],
    'Dusan',
    'Kovacevic');

  // Teams to be matchmade
  public potentialTeams: Team[]
  =
  [
    new Team(
      1,
      'prvi',
      'pa prvi',
      null,
      [
        new TeamMember(
          6,
          'pozicija 1',
          'opis pozicije 1',
          new User(
            'dukicar',
            0,
            0,
            0,
            'dusankovacevic95@gmail.com',
            'sifra',
            '2515-309',
            [
              new Skill(
                'Angular (sorta)',
                1
              ),
              new Skill(
                'Being a faggot',
                2
              )
            ],
            'Dusan',
            'Kovacevic'),
          []),
        new TeamMember(
          79,
          'pozicija 2',
          'opis pozicije 2',
          new User(
            'dukicar',
            0,
            0,
            0,
            'dusankovacevic95@gmail.com',
            'sifra',
            '2515-309',
            [
              new Skill(
                'Angular (sorta)',
                1
              ),
              new Skill(
                'Being a faggot',
                2
              )
            ],
            'Dusan',
            'Kovacevic'),
          [])
      ],
      44.8724,
      20.6493,
      0
    ),
    new Team(
      1,
      'prvi',
      'pa prvi',
      null,
      [
        new TeamMember(
          6,
          'pozicija 1',
          'opis pozicije 1',
          new User(
            'dukicar',
            0,
            0,
            0,
            'dusankovacevic95@gmail.com',
            'sifra',
            '2515-309',
            [
              new Skill(
                'Angular (sorta)',
                1
              ),
              new Skill(
                'Being a faggot',
                2
              )
            ],
            'Dusan',
            'Kovacevic'),
          []),

        new TeamMember(
          79,
          'pozicija 2',
          'opis pozicije 2',
          new User(
            'dukicar',
            0,
            0,
            0,
            'dusankovacevic95@gmail.com',
            'sifra',
            '2515-309',
            [
              new Skill(
                'Angular (sorta)',
                1
              ),
              new Skill(
                'Being a faggot',
                2
              )
            ],
            'Dusan',
            'Kovacevic'),
          [])
      ],
      44.8724,
      20.6493,
      0
    ),
    new Team(
      1,
      'prvi',
      'pa prvi',
      null,
      [
        new TeamMember(
          6,
          'pozicija 1',
          'opis pozicije 1',
          new User(
            'dukicar',
            0,
            0,
            0,
            'dusankovacevic95@gmail.com',
            'sifra',
            '2515-309',
            [
              new Skill(
                'Angular (sorta)',
                1
              ),
              new Skill(
                'Being a faggot',
                2
              )
            ],
            'Dusan',
            'Kovacevic'),
          []),
        new TeamMember(
          79,
          'pozicija 2',
          'opis pozicije 2',
          new User(
            'dukicar',
            0,
            0,
            0,
            'dusankovacevic95@gmail.com',
            'sifra',
            '2515-309',
            [
              new Skill(
                'Angular (sorta)',
                1
              ),
              new Skill(
                'Being a faggot',
                2
              )
            ],
            'Dusan',
            'Kovacevic'),
          [])
      ],
      44.8724,
      20.6493,
      0
    ),
    new Team(
      2,
      'drugi',
      'pa drugi',
      null,
      [],
      44.8831,
      20.6626,
      0
    )
  ]
  constructor() { }

  attemptMatch(teamToMatch: Team) {
    const user = this.user;
    const team = teamToMatch;

    // Request
  }

  dismiss(teamToDismiss: Team) {
    var index = this.potentialTeams.indexOf(teamToDismiss);
    if (index > -1) {
      this.potentialTeams.splice(index, 1);
    }
    // Request
  }
}
