import { Injectable } from '@angular/core';
import { NewGame } from '../models/newGame';
import { APIService } from '../common/api.service';
// tslint:disable-next-line:quotemark
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class NewGameService {
   private newGames: NewGame[]=[
     new NewGame('Need for Speed',' It is a franchise of video game of racing action created by Electronic Arts and currently developed by Ghost Games . ',"https://images.sftcdn.net/images/t_optimized,f_auto/p/5c8d74c2-9b24-11e6-82eb-00163ec9f5fa/1451573144/need-for-speed-carbono-screenshot.jpg"),
     new NewGame('FIFA17','eSTE ES UN JUEGO DE FOOTBOOL2','NULL'),
     new NewGame('FIFA11','eSTE ES UN JUEGO DE FOOTBOOL3','NULL')

   ];
    constructor(){}

     list(): NewGame[] {
             return this.newGames;
           }
      create(name: string, description: string, photo:string){
        this.newGames.push(new NewGame(name,description,photo))

      }
      


}
