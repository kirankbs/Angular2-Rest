import { Component, OnInit } from "@angular/core";
import { Router }            from '@angular/router'


import { Pizza }        from      './Pizza';
import { Toppings }     from      './Toppings';
import { Crust }        from      './Crust';
import { PizzaService}  from      './pizza.service';

@Component({
    selector: 'pizza-app',
    templateUrl: 'app/pizza.component.html',
    styleUrls: ['app/pizzas.component.css']
})

export class PizzasComponent implements OnInit{

    ngOnInit(): void {
        this.getPizzas();
    }

    constructor(private router: Router,private pizzaService: PizzaService){}
    pizzas:Pizza[];
    selectedPizza: Pizza;
    error: any;

    onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza;
    this.router.navigate(['detail',this.selectedPizza.pizzaName]);
      }

    getPizzas(): void {
        this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
    }

    gotoDetail(): void {
        this.router.navigate(['detail',this.selectedPizza.pizzaName]);
    }

    checkout(): void{
        this.router.navigate(['checkout'])
    }

}