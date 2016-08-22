import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PizzaService } from './pizza.service';
import { Pizza } from "./Pizza";

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


constructor(private pizzaService: PizzaService,private route: ActivatedRoute){}

ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    if (params['name'] !== undefined) {
    let name = params['name'];
    this.pizzaService.getPizza(name).then(pizza => this.pizza = pizza);
    } else {
      this.navigated = false;
      this.pizza = new Pizza();
    }
  });
}


/*goBack(): void {
  window.history.back();
}*/
goBack(): void {
  //this.close.emit(savedHero);
  //if (this.navigated) { window.history.back(); }
  window.history.back();
}

save(): void {
  this.pizzaService
      .save(this.pizza)
      .then(pizza => {
        this.pizza = pizza; // saved hero, w/ id if new
        //this.goBack(pizza);
      })
      .catch(error => this.error = error); // TODO: Display error message
}

}