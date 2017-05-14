import { User } from './user.model';
import { TeamMember } from './teamMember.model';

export class Team {

    constructor (
    public id: number,
    public name: string,
    public description: string,
    public teamLead: User,
    public teamUsers: TeamMember[],

    public latitude: number,
    public longitude: number,
    public radius: number
    ) { }
}