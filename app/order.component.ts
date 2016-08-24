import { Component, OnInit }                   from '@angular/core'
import { ActivatedRoute, Params, Router }      from '@angular/router';

import { Pizza }                               from './Pizza'
import { CheckoutService }                     from './checkout.service' 

@Component({
    selector: 'pizza-order',
    templateUrl: 'app/order.component.html',
    styleUrls: ['app/order.component.css']
})

export class OrderComponent implements OnInit{

totalPrice: Number;
pizzas: Pizza[];

constructor(private checkoutService: CheckoutService,
            private route: ActivatedRoute,
            private router: Router){}

ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    this.totalPrice = parseFloat(params['total']);
    this.checkoutService.getCheckoutPizzas().then(pizzas => this.pizzas = pizzas)
  });
}

}