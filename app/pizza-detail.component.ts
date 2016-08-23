import { Component, EventEmitter, 
  Input, OnInit, Output }              from '@angular/core';
import { ActivatedRoute, Params, Router }      from '@angular/router';

import { PizzaService }                from './pizza.service';
import { Pizza }                       from "./Pizza";
import { CheckoutService }             from './checkout.service'

@Component({
    selector: 'pizza-detail',
    templateUrl: 'app/pizza-detail.component.html',
    styleUrls: ['app/pizza-detail.component.css']
})

export class PizzaDetailComponent implements OnInit{
@Input() pizza: Pizza;
@Output() close = new EventEmitter();
error: any;
navigated = false; 


constructor(private pizzaService: PizzaService,
            private checkoutService: CheckoutService,
            private route: ActivatedRoute,
            private router: Router){}

ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    if (params['name'] !== undefined) {
    let name = params['name'];
    this.navigated = true;
    this.pizzaService.getPizza(name).then(pizza => this.pizza = pizza);
    } else {
      this.navigated = false;
      this.pizza = new Pizza();
    }
  });
}


goBack(savedPizza: Pizza = null): void {
    this.close.emit(savedPizza);
    if (this.navigated) { window.history.back(); }
  }

save(): void {
  this.checkoutService.addToCheckout(this.pizza);
  this.router.navigate(['pizzas']);
}

}