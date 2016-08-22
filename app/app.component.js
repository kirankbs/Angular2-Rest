"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var pizza_service_1 = require('./pizza.service');
var AppComponent = (function () {
    function AppComponent(pizzaService) {
        this.pizzaService = pizzaService;
        this.title = "Online PizzaDelivery";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getPizzas();
    };
    AppComponent.prototype.onSelect = function (pizza) {
        this.selectedPizza = pizza;
    };
    AppComponent.prototype.getPizzas = function () {
        var _this = this;
        this.pizzaService.getPizzas().then(function (pizzas) { return _this.pizzas = pizzas; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pizza-delivery',
            template: "\n    <h1>Online Pizza Delivery</h1>\n    <h2>Pizzas</h2>\n    <ul class=\"pizzas\">\n        <li *ngFor= \"let pizza of pizzas\" [class.selected]=\"pizza === selectedPizza\" (click)=\"onSelect(pizza)\">\n            <b class=\"pizzaName\">{{pizza.pizzaName}}</b><label class=\"PizzaPrice\">{{pizza.price}}</label>\n            <div><label class=\"Toppings\">Toppings: </label><span *ngFor= \"let topping of pizza.toppingsList\">{{topping.toppingName}} </span></div>\n            <div><label>Crust: </label>{{pizza.crust.name}}</div>\n        </li>\n    </ul>\n    <pizza-detail [pizza]=\"selectedPizza\"></pizza-detail>\n    ",
            styleUrls: ['app/app.component.css'],
            providers: [pizza_service_1.PizzaService]
        }), 
        __metadata('design:paramtypes', [pizza_service_1.PizzaService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
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
//# sourceMappingURL=app.component.js.map