import {Component} from 'angular2/core';
import {GamesComponent} from './games.component';
import {ProductsComponent} from './products.component';

@Component({
    selector: 'my-app',
    template: `
                <h1>Anusones first Angular 2 App</h1>
                <games></games>
                <products></products>
              `,
    directives: [GamesComponent, ProductsComponent]
})
export class AppComponent { }
