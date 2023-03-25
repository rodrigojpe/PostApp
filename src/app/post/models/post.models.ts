

export class Post {


    public id: number;
    public textName: string ;
    public textDescription : string ;
    public completed: boolean

    constructor( textName: string, textDescription: string ){
        this.textName = textName;
        this.textDescription = textDescription
        this.id = Math.random();
        this.completed = false;
    } 
}