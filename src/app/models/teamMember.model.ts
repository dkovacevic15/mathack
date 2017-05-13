import { User } from './user.model';
import { Skill } from './skill.model';


export class TeamMember {

    constructor (
    public id: number,
    public name: string,
    public description: string,
    public user: User,
    
    public reqSkills: Skill[]
    ) { }
}