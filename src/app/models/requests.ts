export class Requests {

    private userRq: String;
    private change1: String;
    private change2: String; 
    private state: String;   
    
    constructor(userRq: String, change1: String, change2: String) {
        this.userRq=userRq;
        this.change1=change1;
        this.change2=change2;
        this.state="Pending";
    }



}