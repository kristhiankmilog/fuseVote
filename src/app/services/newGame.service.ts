import { Injectable } from '@angular/core';
import { NewGame } from '../models/newGame';
import { APIService } from '../common/api.service';
// tslint:disable-next-line:quotemark
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class NewGameService {
   private newGames: NewGame[]=[
     new NewGame('FIFA 18','Developed and published by Electronic Arts and was released worldwide on 29 September 2017 for Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360, Xbox One and Nintendo Switch. It is the 25th instalment in the FIFA series. Real Madrid forward Cristiano Ronaldo appears as the cover athlete of the regular edition. Ronaldo Nazario appears on the icon edition of the game'

                            ,null)


   ];
    constructor(){}
  
      create(name: string, description: string, photo:string){
        this.newGames.push(new NewGame(name,description,photo));

      }
      
      list(): NewGame[] {
        return this.newGames;
      }

}
