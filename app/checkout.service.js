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
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var pizza_service_1 = require('./pizza.service');
var CheckoutService = (function () {
    function CheckoutService(pizzaService) {
        this.pizzaService = pizzaService;
        this.pizzas = [];
    }
    CheckoutService.prototype.addToCheckout = function (pizza) {
        this.pizzas.push(pizza);
    };
    CheckoutService.prototype.getCheckoutPizzas = function () {
        var _this = this;
        return new Promise(function (resolve) { return resolve(_this.pizzas); });
    };
    CheckoutService.prototype.removePizza = function (pizza) {
        this.pizzas = this.pizzas.filter(function (p) { return p.pizzaName != pizza.pizzaName; });
        return this.pizzas;
    };
    CheckoutService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [pizza_service_1.PizzaService])
    ], CheckoutService);
    return CheckoutService;
}());
exports.CheckoutService = CheckoutService;
//# sourceMappingURL=checkout.service.js.map