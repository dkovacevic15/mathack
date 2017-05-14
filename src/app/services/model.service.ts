import { TeamMember } from './../models/teamMember.model';
import { Skill } from './../models/skill.model';
import { User } from './../models/user.model';
import { Team } from './../models/team.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {

  public user: User
  = new User(
    'Dusan Kovacevic',
    1,
    44.8712,
    20.6620,
    'dusankovacevic95@gmail.com',
    'sifra',
    '555-333',
    [
      new Skill(
        'Angular (sorta)',
        1
      ),
      new Skill(
        'Being a faggot',
        2
      )
    ]);

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
            'Himel',
            36,
            15,
            15,
            'dubismrda@gmail.com',
            'dubismrda',
            '555-333',
            []
          ),
          []),
        new TeamMember(
          79,
          'pozicija 2',
          'opis pozicije 2',
          new User(
            'Strujadin',
            39,
            20,
            20,
            'helloimmrgay@gmail.com',
            'dubismrdabutitsactuallyfunny',
            '555-333 jer je drugi put jos urnebesnije',
            []
          ),
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

}
