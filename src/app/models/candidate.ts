export class Candidate {

    private _name: string;

    private _lastname: string;

    private _politic: string;

    private _description: string;

    private _image: string;

    private _email: string;

    private _password: string;

    private _tittle: string;

    private _proposal: string;


    constructor( name: string, lastname: string, politic: string, description: string,  image: string, email: string,password: string,tittle: string,proposal: string ) {

        this._name = name;

        this._lastname = lastname;

        this._politic = politic;

        this._description = description;

        this._image = image;

        this._email = email;

        this._password = password;

        this._tittle = tittle;

        this._proposal = proposal;

        
    }

    



    get name(): string {

      return this._name;

    }

    set name(value: string) {

      this._name = value;

    }

    get lastname(): string {

        return this._lastname;
  
    }
  
    set lastname(value: string) {

    this._lastname = value;

    }

    get politic(): string {

      return this._politic;

    }

    set politic(value: string) {

      this._politic = value;

    }

    get description(): string {

      return this._description;

    }

    set description(value: string) {

      this._description = value;

    }

    get image(): string {

      return this._image;

    }

    set image(value: string) {

      this._image = value;

    }

    get password(): string {

      return this._password;

    }

    set password(value: string) {

      this._password = value;

    }

    get tittle(): string {

      return this._tittle;

    }

    set tittle(value: string) {

      this._tittle = value;

    }

    get proposal(): string {

      return this._proposal;

    }

    set proposal(value: string) {

      this._tittle = value;

    }
    
}