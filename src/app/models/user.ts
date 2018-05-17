export class User {
    private _id: Number;

    private _name: string;

    private _lastname: string;

    private _email: string;

    private _borndate: string;

    private _password: string;


    constructor(id: Number, name: string, lastname: string, email: string, borndate: string,  password: string, confirmPassword: string) {

        this._name = name;

        this._lastname = lastname;

        this._email = email;

        this._borndate = borndate;

        this._password = password;

        this._id = id;
    }

    get id(): Number {

      return this._id;

    }



    set id(value: Number) {

      this._id = value;

    }



    get name(): string {

      return this._name;

    }

    set name(value: string) {

      this._name = value;

    }

    get email(): string {

      return this._email;

    }

    set email(value: string) {

      this._email = value;

    }

    get borndate(): string {

      return this._borndate;

    }

    set borndate(value: string) {

      this._borndate = value;

    }

    get password(): string {

      return this._password;

    }

    set password(value: string) {

      this._password = value;

    }
    
}
