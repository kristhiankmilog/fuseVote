export class User {
    private firstname: string;
    private lastname: string;
    private image: string;
    private username: string;
    private description: string;
    

    constructor(firstname: string, lastname: string, image: string, username:string, description: string) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.username = username;
        this.description = description;
    }
    
}
