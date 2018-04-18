export class Change {
    private id: number;
    private nameGame: string;
    private description: string;
    private image: string;
    private state: string;
    private accept: boolean;
    private user: String;

    constructor(id: number, 
                nameGame: string, 
                description: string, 
                image: string, 
                state: string, 
                accept: boolean,
                user: string) {

        this.id = id;
        this.nameGame = nameGame;
        this.description = description;
        this.image = image;
        this.state = state;
        this.accept = accept;
        this.user=user;
    }
}