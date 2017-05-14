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
      [],
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
