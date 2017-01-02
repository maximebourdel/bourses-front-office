import { Component } from '@angular/core';

// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `
        <nav>
            <a routerLink="/quotes"  routerLinkActive="active" >Quotes</a>
            <a routerLink="/industry"  routerLinkActive="active" >Industry</a>
        </nav>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent { }
