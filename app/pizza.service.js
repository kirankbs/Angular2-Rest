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
var mock_pizzas_1 = require('./mock-pizzas');
var PizzaService = (function () {
    function PizzaService(http) {
        this.http = http;
        //private _pizzassUrl = 'http://localhost:9082/pizzas';
        this._pizzassUrl = 'app/pizzas';
    }
    PizzaService.prototype.getPizzas = function () {
        var headers = new http_1.Headers([{
                'Content-Type': 'application/json' },
            { 'Access-Control-Allow-Origin': '*' }
        ]);
        //return Promise.resolve(PizzasList);
        return this.http.get(this._pizzassUrl, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PizzaService.prototype.getPizzasSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_pizzas_1.PizzasList); }, 2000);
        });
    };
    PizzaService.prototype.getPizza = function (name) {
        return this.getPizzas().then(function (pizzas) { return pizzas.find(function (pizza) { return pizza.pizzaName === name; }); });
    };
    PizzaService.prototype.save = function (pizza) {
        if (pizza.pizzaName) {
            return this.put(pizza);
        }
        return this.post(pizza);
    };
    PizzaService.prototype.delete = function (pizza) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this._pizzassUrl + "/" + pizza.pizzaName;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    PizzaService.prototype.post = function (pizza) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this._pizzassUrl, JSON.stringify(pizza), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PizzaService.prototype.put = function (pizza) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this._pizzassUrl + "/" + pizza.pizzaName;
        return this.http
            .put(url, JSON.stringify(pizza), { headers: headers })
            .toPromise()
            .then(function () { return pizza; })
            .catch(this.handleError);
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