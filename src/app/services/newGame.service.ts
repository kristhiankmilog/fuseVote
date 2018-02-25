import { Injectable } from '@angular/core';
import { NewGame } from '../models/newGame';
import { APIService } from '../common/api.service';
// tslint:disable-next-line:quotemark
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class NewGameService {
   private newGames: NewGame[]=[
     new NewGame('https://es.wikipedia.org/wiki/Guanos%C3%ADn_trifosfato#/media/File:GTP_chemical_structure.png','Need for Speed',' It is a franchise of video game of racing action created by Electronic Arts and currently developed by Ghost Games.'),
     new NewGame('NULL','Warcraft: Orcs & Humans','Is a strategy video game created by Blizzard Entertainment for PC. It is one of the first games of the real-time strategy or RTS genre . Warcraft: Orcs & Humans starts the Warcraft series and takes place in a medieval epic environment where humans from the mythical kingdom of Azeroth confront the invading orcs among other fantastic creatures .'),
     new NewGame('NULL','League of Legends','Is a competitive online game with a frenetic rhythm that fuses the speed and intensity of the real-time strategy (ETR) with elements of role-playing games. Two teams of powerful champions, one with a unique design and style of games, compete with the face through various battlefields and game modes. With an ever-expanding roster of champions, frequent updates and an exciting competitive landscape, League of Legends offers unlimited gaming possibilities for all skill levels.'),
     new NewGame(' ','Sea of Thieves',' Sea of ​​Thieves is a first-person video game developed by Rare and distributed by Microsoft. It will go on sale in 2018 for Xbox One'),
     new NewGame(' ','Super Mario Bros.','Is a platform video game, designed by Shigeru Miyamoto, released on September 13, 1985 and produced by the company Nintendo, for the Nintendo Entertainment System (NES). The game describes the adventures of brothers Mario and Luigi, characters who already starred in the arcade Mario Bros. of 1983. This time both must rescue Princess Peach Mushroom Kingdom who was kidnapped by the King of the Koopas, Bowser.')
   ];
    constructor(){}

     list(): NewGame[] {
             return this.newGames;
           }
      create(name: string, description: string, photo:string){
        this.newGames.push(new NewGame(name,description,photo))

      }
}
