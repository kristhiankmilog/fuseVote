import { Injectable } from "@angular/core";
import { APIService } from "../common/api.service";
import { AppConfiguration } from "../common/config/app-configuration.service";
import { AuthService } from "../common/auth.service";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { User } from "../models/user";
import 'rxjs/add/observable/of';
import { Candidate } from '../models/candidate';


@Injectable()
export class UsersService extends APIService {
  public cacheUser: User;
  private cont = 0;
  private contr =0;
  
  public users: User[] = [
    
    
  ];
  private resourceUrl = 'user';
constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) { 
    super(config, authService, http);
  }

  login(email: string, password: string) {
    
    return this.post('user/login', { email, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }
  list(): Observable<User[]> {
    return this.get(this.resourceUrl);

    }
      


  registerUser(id: Number, firstname: string, lastname: string, email: string,password: string, bornDate: string,   statevote: boolean) {
    return this.post('user/', { id,firstname, lastname, email, password,bornDate,statevote}).map(loginResponse => {
        if (loginResponse) {



        }

    });

  }
  getUserById(id: Number) {

    return this.get('user/id/' + id);
  }
  updateUser(name: string, email: string, image: string, password: string) {
    return this.post('user/updateprofile/' + this.cacheUser.id, { id: this.cacheUser.id, name: name, email: email,
      image: image, password: password, confirmPassword: password}).map(updateResponse => {
          if (updateResponse) { 
          }
      });

  }

  getUser(email:string){

    return this.get(this.resourceUrl+'/'+email)

  }
  currentUser(){

    return this.get(this.resourceUrl+'/'+sessionStorage.getItem("email"));

  }


}
