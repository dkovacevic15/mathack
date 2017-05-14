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
    11,
    44.7796,
    20.4570,
    'dusankovacevic95@gmail.com',
    'sifra',
    '2515-309',
    [
      new Skill(
        'Angular',
        1
      ),
      new Skill(
        'JavaScript',
        2
      )
    ],
    'Dusan',
    'Kovacevic');

    public nullUser: User
  = new User(
    '',
    0,
    0,
    0,
    '',
    '',
    '',
    [],
    '',
    '');

  // Teams to be matchmade
  public potentialTeams: Team[]
  =
  [
    new Team(
      1,
      'SuperSmo',
      'Mi smo pravi izbor.',
      new User(
    'apach',
    1,
    44.7878,
    20.4652,
    'appach@hotmail.com',
    '32451234',
    '25133253',
    [
      new Skill(
        'Leadership',
        3
      ),
      new Skill(
        'Java',
        4
      )
    ],
    'Radovan',
    'Miletic'),
      [
        new TeamMember(
          6,
          'Java Developer',
          'Java developer sa iskustvom u OSGI standardu',
          new User(
            'pepan44',
            7,
            44.8031,
            20.4596,
            'pepan44@gmail.com',
            '666666',
            '44443333',
            [
              new Skill(
                'Java',
                5
              ),
              new Skill(
                'OSGI',
                6
              )
            ],
            'Aleksandar',
            'Papanovski'),
          [
            new Skill(
                'Java',
                5
              ),
              new Skill(
                'OSGI',
                6
              )]),
        new TeamMember(
          79,
          'Front-end Developer',
          'Front-end developer u programu po svom izboru',
          new User(
            'torimax',
            7,
            44.8031,
            20.4596,
            'pepan44@gmail.com',
            '666666',
            '44443333',
            [
              new Skill(
                'Bootstrap',
                5
              ),
            ],
            'Aleksandar',
            'Papadulovski'),
          [
            new Skill(
                'Front-end',
                10
              ),
          ])
      ],
      44.7973, 
      20.4869,
      0
    ),
    new Team(
      2,
      'gariJam',
      'Opustena atmosfera, puno pica i projekat. Potrebno jos nesto?',
      null,
      [
        new TeamMember(
          20,
          'Gari 1',
          'Potrebna samo dobra volja',
          this.nullUser,
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
    var index = this.potentialTeams.indexOf(teamToMatch);
    if (index > -1) {
      this.potentialTeams.splice(index, 1);
    }
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
