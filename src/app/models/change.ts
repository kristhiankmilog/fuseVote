export class Change {
    private id: number;
    private nameGame: string;
    private description: string;
    private image: string;
    private state: string;
    private accept: boolean;
    private user: String;
    private datep: Date;

    constructor(id: number, 
                nameGame: string, 
                description: string, 
                image: string, 
                state: string, 
                accept: boolean,
                user: string,
                datep: Date) {

        this.id = id;
        this.nameGame = nameGame;
        this.description = description;
        this.image = image;
        this.state = state;
        this.accept = accept;
        this.user=user;
        this.datep=datep;
    }
}