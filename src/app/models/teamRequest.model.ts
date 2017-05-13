
import { User } from './user.model';
import { Team } from './team.model';

export class TeamRequest {

    constructor (
    public id: number,
    public user: User,
    public team: Team,
    
    public approved_by_team: boolean,
    public approved_by_user: boolean

    ) { }
}