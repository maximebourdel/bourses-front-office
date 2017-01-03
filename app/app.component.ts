import { Component } from '@angular/core';

// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `
        
        <h1>Application sur les bourses</h1>
        <div class="panel panel-default">

            <div class="panel-heading">
                <h3 class="panel-title">Attention, les données sont récupées via l'API Yahoo et ont donc 15mn de retard sur les résultats officiels.</h3>
            </div>

            <div class="panel-body">
                Vous pourrez trouver ici une liste exhaustive d'actions :
            </div>
    
    
            <nav>
                <a routerLink="/quotes"  routerLinkActive="active" >Quotes</a>
                <a routerLink="/industry"  routerLinkActive="active" >Industry</a>
            </nav>
            
            <router-outlet></router-outlet>
            
        </div>
    `,
})
export class AppComponent { }
