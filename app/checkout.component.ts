import { Component, OnInit }        from '@angular/core'
import {Router}                     from '@angular/router'

import { Pizza }            from './pizza'
import { CheckoutService }  from './checkout.service'

@Component({
    selector: 'pizza-checkout',
    templateUrl: 'app/checkout.component.html',
    styleUrls: ['app/pizzas.component.css']
})

export class CheckoutComponent implements OnInit{

    constructor(private checkoutService: CheckoutService,private router: Router){}

    ngOnInit(): void {
        this.getPizzas();
    }

    pizzas:Pizza[];
    selectedPizza: Pizza;

    getPizzas(): void {
        this.checkoutService.getCheckoutPizzas().then(pizzas => this.pizzas = pizzas);
    }

    onSelect(pizza: Pizza): void {
        this.selectedPizza = pizza;
        this.router.navigate(['detail',this.selectedPizza.pizzaName]);
      }

}