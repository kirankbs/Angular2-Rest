import { Component, OnInit }        from '@angular/core'
import {Router}                     from '@angular/router'

import { Pizza }            from './pizza'
import { PizzaService }     from './pizza.service'    
import { CheckoutService }  from './checkout.service'

@Component({
    selector: 'pizza-checkout',
    templateUrl: 'app/checkout.component.html',
    styleUrls: ['app/pizzas.component.css']
})

export class CheckoutComponent implements OnInit{

    constructor(private checkoutService: CheckoutService,
                private router: Router,
                private pizzaService: PizzaService){}

    ngOnInit(): void {
        this.getPizzas();
    }

    pizzas:Pizza[];
    selectedPizza: Pizza;
    totalPrice: Number;
    error: any;

    getPizzas(): void {
        this.checkoutService.getCheckoutPizzas().then(pizzas => this.pizzas = pizzas);
    }

    onSelect(pizza: Pizza): void {
        this.selectedPizza = pizza;
        this.router.navigate(['detail',this.selectedPizza.pizzaName]);
      }

      deletePizza(pizza: Pizza, event: any): void {
          event.stopPropagation();
          this.pizzas = this.checkoutService.removePizza(pizza);
      }
      postPizzaOrder(): void {
          this.totalPrice = this.pizzaService.postPizzaOrder(this.pizzas);
          this.router.navigate(['order',this.totalPrice])
      }

}