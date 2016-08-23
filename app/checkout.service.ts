import { Headers, Http, Response }          from '@angular/http'
import {Injectable}                         from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Pizza }                            from './Pizza';
import { PizzaService }                       from './pizza.service';

@Injectable()
export class CheckoutService{

    constructor(private pizzaService: PizzaService){}

    pizzas: Pizza[] = [];

    addToCheckout(pizza: Pizza): void {
        this.pizzas.push(pizza)
    }

    getCheckoutPizzas(): Promise<Pizza[]> {
        return new Promise(resolve => resolve(this.pizzas));
    }

    removePizza(pizza: Pizza): Promise<Pizza[]> {
        return new Promise(resolve => resolve(this.pizzas));
    }
}