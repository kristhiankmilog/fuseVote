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
      

  


  registerCandidate(name: string, lastname: string, politic: string, description: string,image: string,email: string, password:string) {
    
    return this.post('user/', { name, lastname, politic,description,image,}).map(loginResponse => {
        if (loginResponse) {



        }

    });

  }

  registerUser(firstname: string, username: string, email: string, password: string,image: string, description:string) {
    return this.post('user/', { firstname,username, email, password,image,description }).map(loginResponse => {
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

  listChanges(): Observable<Change[]> {
    return this.get('user/changes/'+sessionStorage.getItem("email"));
  }


  createChange(value0:string,value1:string,value2:string,value3:string,bool:boolean):Observable<Change>{
    this.cont+=1;
    var Currentdates = new Date();
    return this.post('user/changes/'+sessionStorage.getItem("email"),new Change(this.cont,value0,value1,value2,value3,bool,sessionStorage.getItem("email"),Currentdates));

  }

  listAllChanges(): Observable<Change[]> {
    return this.get('user/exchanges/'+sessionStorage.getItem("email"));
  }

  createExrequests(userRq:String,change1Game: String,change1:String,change2:String):Observable<Exrequests>{
    console.log(""+userRq+change1Game+change1+change2+"Entro hacer request ************************");
    this.contr+=1;
    return this.post('user/exrequest/'+sessionStorage.getItem("email"),new Exrequests("1",userRq,change1Game,change1,change2,"pending"));
  }

  listRequests(): Observable<Exrequests[]> {
    return this.get('user/exrequests/'+sessionStorage.getItem("email"));
  }

}
