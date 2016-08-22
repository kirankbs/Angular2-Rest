import { Component, OnInit } from "@angular/core";
import { Pizza } from './Pizza';
import { Toppings } from './Toppings';
import { Crust } from './Crust';
import { PizzaService} from './pizza.service';

@Component({
    selector: 'pizza-delivery',
    template: `
    <h1>Online Pizza Delivery</h1>
    <h2>Pizzas</h2>
    <ul class="pizzas">
        <li *ngFor= "let pizza of pizzas" [class.selected]="pizza === selectedPizza" (click)="onSelect(pizza)">
            <b class="pizzaName">{{pizza.pizzaName}}</b><label class="PizzaPrice">{{pizza.price}}</label>
            <div><label class="Toppings">Toppings: </label><span *ngFor= "let topping of pizza.toppingsList">{{topping.toppingName}} </span></div>
            <div><label>Crust: </label>{{pizza.crust.name}}</div>
        </li>
    </ul>
    <pizza-detail [pizza]="selectedPizza"></pizza-detail>
    `,
    styleUrls: ['app/app.component.css'],
    providers: [PizzaService]
})

export class AppComponent implements OnInit{

    ngOnInit(): void {
        this.getPizzas();
    }

    constructor(private pizzaService: PizzaService){}

    title = "Online PizzaDelivery"
    pizzas:Pizza[];
    selectedPizza: Pizza;

    onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza;
      }

    getPizzas(): void {
        this.pizzaService.getPizzas().then(pizzas => this.pizzas = pizzas);
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