import { Component, Input} from '@angular/core';

import { Pizza } from "./Pizza";

@Component({
    selector: 'pizza-detail',
    template: `
        <div *ngIf="pizza">
        <h2>{{pizza.pizzaName}}</h2>
        <div><label>Toppings: </label><span *ngFor= "let topping of pizza.toppingsList">{{topping.toppingName}} </span></div>
        <div><label>Crust: </label>{{pizza.crust.name}}</div>
        <div><label>Price: </label>{{pizza.price}}</div>
        <div>
            <label>Toppings: </label>
            <div *ngFor= "let topping of pizza.toppingsList"><input [(ngModel)]="topping.toppingName" placeholder="topping"></div>
        </div>
    `
})

export class PizzaDetailComponent{
@Input()
pizza: Pizza;
}