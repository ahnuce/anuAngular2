import {Component} from 'angular2/core'
import {GameService} from './game.service'
import {AutoGrowDirective} from './auto-grow.directive'
//a component has a template but a directive doesnt
@Component({
    selector: 'games',
    template: `
              <h2>Games</h2>
              {{ title }}
              <br>
              <input type="text" autoGrow />
              <ul>
                <li *ngFor="#game of games">
                  {{ game }}
                </li>
              </ul>
              `,
//specify depenency for this component
          providers: [GameService],
          directives: [AutoGrowDirective]
})
//
export class GamesComponent {
    title = "The title of games page";
    games;
// game component constructor needs a service. The GameService is a dependency to the Component. this is a dependency injection
// Angular 2 has a built in framework
    constructor(gameService: GameService){
        this.games = gameService.getGames();
    }
}
