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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var PizzaService = (function () {
    function PizzaService(http) {
        this.http = http;
        this._pizzassUrl = 'http://10.30.125.95:9082/';
        this.headers = new http_1.Headers([{
                'Content-Type': 'application/json' },
            { 'Access-Control-Allow-Origin': '*' }
        ]);
    }
    PizzaService.prototype.getPizzas = function () {
        var headers1 = new http_1.Headers([{
                'Content-Type': 'application/json' },
            { 'Access-Control-Allow-Origin': '*' }
        ]);
        return this.http.get(this._pizzassUrl + "pizzas", { headers: headers1 })
            .map(function (response) { return response.json(); });
    };
    PizzaService.prototype.getToppings = function () {
        return this.http.get(this._pizzassUrl + "toppings", { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    PizzaService.prototype.getCrusts = function () {
        return this.http.get(this._pizzassUrl + "crusts", { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    PizzaService.prototype.getPizza = function (name) {
        return this.getPizzas().map(function (pizzas) { return pizzas.find(function (pizza) { return pizza.pizzaName === name; }); });
    };
    PizzaService.prototype.postPizzaOrder = function (pizzas) {
        var price = 0;
        pizzas.forEach(function (element) {
            price += element.price;
        });
        var serviceTax = (price * 13.5) / 100;
        var vat = (price * 10.5) / 100;
        return price + serviceTax + vat;
    };
    PizzaService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    PizzaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PizzaService);
    return PizzaService;
}());
exports.PizzaService = PizzaService;
//# sourceMappingURL=pizza.service.js.map