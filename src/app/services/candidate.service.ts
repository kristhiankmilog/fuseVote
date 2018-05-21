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
export class CandidateService extends APIService {
  public cacheUser: User;
  private cont = 0;
  private contr =0;
  
  public users: User[] = [
    
    
  ];
  private resourceUrl = 'candidate';
constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) { 
    super(config, authService, http);
  }

  list(): Observable<User[]> {
    return this.get(this.resourceUrl);

    }
      

  


  registerCandidate(name: string, lastname: string, politic: string, description: string,image: string,email: string, password:string) {
  
    return this.post(this.resourceUrl, { name, lastname, politic,description,image,});

  }

  addProposal(tittle: string, description: string){
    return this.post(this.resourceUrl+'/proposal'+sessionStorage.getItem("email"),{tittle,description});
  }


  getUserById(id: Number) {

    return this.get('user/id/' + id);
  }

  

  getUser(email:string){

    return this.get(this.resourceUrl+'/'+email)

  }

  currentUser(){

    return this.get(this.resourceUrl+'/'+sessionStorage.getItem("email"));

  }


}
