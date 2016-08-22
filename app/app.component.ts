import { Component } from '@angular/core'

@Component({
    selector: 'pizza-delivery',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/pizzas" routerLinkActive="active">PIZZAS</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css']
})

export class AppComponent{
    title = "Online Pizza Delivery"
}