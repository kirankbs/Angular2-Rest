import { Component, EventEmitter, 
  Input, OnInit, Output }              from '@angular/core';
import { ActivatedRoute, Params, Router }      from '@angular/router';

import { PizzaService }                from './pizza.service';
import { Pizza }                       from "./Pizza";
import { CheckoutService }             from './checkout.service'
import { Toppings }                     from './Toppings' 
import { Crust }                       from './Crust'

@Component({
    selector: 'pizza-detail',
    templateUrl: 'app/pizza-detail.component.html',
    styleUrls: ['app/pizza-detail.component.css']
})

export class PizzaDetailComponent implements OnInit{
@Input() pizza: Pizza;
@Output() close = new EventEmitter();
toppings: Toppings[];
crusts: Crust[];

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
    this.pizzaService.getPizza(name).subscribe(pizza => this.pizza = pizza);
    } else {
      this.navigated = false;
      this.pizza = new Pizza();
    }
  });

  this.getToppings();
  this.getCrusts();
}


goBack(savedPizza: Pizza = null): void {
    this.close.emit(savedPizza);
    if (this.navigated) { window.history.back(); }
  }

save(): void {
  this.checkoutService.addToCheckout(this.pizza);
  this.router.navigate(['pizzas']);
}

onSelectTopping(topping: Toppings): void {
  this.pizza.toppingsList.push(topping)
}

onSelectCrust(crust: Crust): void {
  this.pizza.crust= crust;
}

getToppings(): void {
  this.pizzaService.getToppings().subscribe(toppings => this.toppings = toppings);
}
getCrusts(): void {
  this.pizzaService.getCrusts().subscribe(crusts => this.crusts = crusts);
}
}