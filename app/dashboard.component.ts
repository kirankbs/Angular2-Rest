import { Component, OnInit } from '@angular/core';
import { Pizza } from './pizza'
import { PizzaService } from './pizza.service'
import { Router } from '@angular/router'


@Component({
  selector: 'pizza-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    pizzas: Pizza[] = [];

    constructor(
        private router: Router,
        private pizzaService: PizzaService){}

    ngOnInit(): void {
        this.pizzaService.getPizzas()
            .then(pizzas => this.pizzas = pizzas.slice(1,10));
    }

    gotoDetail(pizza: Pizza ): void {
        let link = ['/detail',pizza.pizzaName];
        this.router.navigate(link)
    }
 }