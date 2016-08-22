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
      }

    getPizzas(): void {
        this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
    }

    gotoDetail(): void {
        this.router.navigate(['detail',this.selectedPizza.pizzaName]);
    }

}

/*const pizzasList: Pizza[] = [
    {pizzaName: "Zesty Chicken",toppingsList: "Tomato, Barbeque",crust: "Regular",price: 150},
    {pizzaName: "Zesty Chicken",toppingsList: "Tomato, Barbeque",crust: "Regular",price: 150},
    {pizzaName: "Zesty Chicken",toppingsList: "Tomato, Barbeque",crust: "Regular",price: 150},
    {pizzaName: "Zesty Chicken",toppingsList: "Tomato, Barbeque",crust: "Regular",price: 150},
    {pizzaName: "Zesty Chicken",toppingsList: "Tomato, Barbeque",crust: "Regular",price: 150},
    {"pizzaName":"Margherita","price":150.0,"toppingsList":"Tomato","crust":"Regular"}
]

const pizzasList: Pizza[] = [
    {"pizzaName":"Margherita","price":150.0,"toppingsList":[{"toppingName":"Tomato","price":10.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"Veg. Hawaiian Delight","price":200.0,"toppingsList":[{"toppingName":"Jalapeno","price":15.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"NonVeg. Hawaiian Delight","price":220.0,"toppingsList":[{"toppingName":"Barbeque Chicken","price":100.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"Veggie Paradise","price":230.0,"toppingsList":[{"toppingName":"Tomato","price":10.0},{"toppingName":"Olives","price":15.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"Peppy Paneer","price":230.0,"toppingsList":[{"toppingName":"Jalapeno","price":15.0},{"toppingName":"Olives","price":15.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"Zesty Chicken","price":280.0,"toppingsList":[{"toppingName":"Barbeque Chicken","price":100.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"Chicken Maxicana","price":300.0,"toppingsList":[{"toppingName":"Cheese","price":20.0},{"toppingName":"Barbeque Chicken","price":100.0},{"toppingName":"Jalapeno","price":15.0}],"crust":{"name":"Regular","price":0.0}}
    ]*/