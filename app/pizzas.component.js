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
        this.router.navigate(['detail', this.selectedPizza.pizzaName]);
    };
    PizzasComponent.prototype.getPizzas = function () {
        var _this = this;
        this.pizzaService.getPizzas().then(function (pizzas) { return _this.pizzas = pizzas; });
        console.info(this.pizzas + "***********");
    };
    PizzasComponent.prototype.gotoDetail = function () {
        this.router.navigate(['detail', this.selectedPizza.pizzaName]);
    };
    PizzasComponent.prototype.checkout = function () {
        this.router.navigate(['checkout']);
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
//# sourceMappingURL=pizzas.component.js.map