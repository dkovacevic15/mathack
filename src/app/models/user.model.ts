import { Skill } from './skill.model';

export class User {

    constructor (
    public username: string,
    public id: number,
    public latitude: number,
    public longitude: number,
    public email: string,
    public password: string,
    public phoneNum: string,
    public skills: Skill[],
    public firstName: string,
    public lastName: string
    ) { }

}