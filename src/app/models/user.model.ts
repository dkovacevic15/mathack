import { Skill } from './skill.model';

export class User {

    constructor (
    public name: string,
    public id: number,
    public latitude: number,
    public longitude: number,
    public email: string,
    public password: string,
    public phoneNum: string,
    public skills: Skill[]
    ) { }
}