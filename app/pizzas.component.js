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
var router_1 = require('@angular/router');
var pizza_service_1 = require('./pizza.service');
var PizzasComponent = (function () {
    function PizzasComponent(router, pizzaService) {
        this.router = router;
        this.pizzaService = pizzaService;
    }
    PizzasComponent.prototype.ngOnInit = function () {
        this.getPizzas();
    };
    PizzasComponent.prototype.onSelect = function (pizza) {
        this.selectedPizza = pizza;
    };
    PizzasComponent.prototype.getPizzas = function () {
        var _this = this;
        this.pizzaService.getPizzas().then(function (pizzas) { return _this.pizzas = pizzas; });
    };
    PizzasComponent.prototype.gotoDetail = function () {
        this.router.navigate(['detail', this.selectedPizza.pizzaName]);
    };
    PizzasComponent = __decorate([
        core_1.Component({
            selector: 'pizza-app',
            templateUrl: 'app/pizza.component.html',
            styleUrls: ['app/pizzas.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, pizza_service_1.PizzaService])
    ], PizzasComponent);
    return PizzasComponent;
}());
exports.PizzasComponent = PizzasComponent;
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
//# sourceMappingURL=pizzas.component.js.map