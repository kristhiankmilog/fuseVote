export class Exrequests {

    private id: number;
    private userRq: String;
    private change1Game: String;
    private change1: String;
    private change2: String; 
    private state: String;   
    
    constructor(id: number, userRq: String, change1Game: String, change1: String, change2: String) {
        this.id=id;
        this.userRq=userRq;
        this.change1Game=change1Game;
        this.change1=change1;
        this.change2=change2;
        this.state="Pending";
    }



}