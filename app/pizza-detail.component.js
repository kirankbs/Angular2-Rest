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
var router_1 = require('@angular/router');
var pizza_service_1 = require('./pizza.service');
var Pizza_1 = require("./Pizza");
var checkout_service_1 = require('./checkout.service');
var PizzaDetailComponent = (function () {
    function PizzaDetailComponent(pizzaService, checkoutService, route, router) {
        this.pizzaService = pizzaService;
        this.checkoutService = checkoutService;
        this.route = route;
        this.router = router;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    PizzaDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['name'] !== undefined) {
                var name_1 = params['name'];
                _this.navigated = true;
                _this.pizzaService.getPizza(name_1).subscribe(function (pizza) { return _this.pizza = pizza; });
            }
            else {
                _this.navigated = false;
                _this.pizza = new Pizza_1.Pizza();
            }
        });
        this.getToppings();
        this.getCrusts();
    };
    PizzaDetailComponent.prototype.goBack = function (savedPizza) {
        if (savedPizza === void 0) { savedPizza = null; }
        this.close.emit(savedPizza);
        if (this.navigated) {
            window.history.back();
        }
    };
    PizzaDetailComponent.prototype.save = function () {
        this.checkoutService.addToCheckout(this.pizza);
        this.router.navigate(['pizzas']);
    };
    PizzaDetailComponent.prototype.onSelectTopping = function (topping) {
        this.pizza.toppingsList.push(topping);
    };
    PizzaDetailComponent.prototype.onSelectCrust = function (crust) {
        this.pizza.crust = crust;
    };
    PizzaDetailComponent.prototype.getToppings = function () {
        var _this = this;
        this.pizzaService.getToppings().subscribe(function (toppings) { return _this.toppings = toppings; });
    };
    PizzaDetailComponent.prototype.getCrusts = function () {
        var _this = this;
        this.pizzaService.getCrusts().subscribe(function (crusts) { return _this.crusts = crusts; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Pizza_1.Pizza)
    ], PizzaDetailComponent.prototype, "pizza", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PizzaDetailComponent.prototype, "close", void 0);
    PizzaDetailComponent = __decorate([
        core_1.Component({
            selector: 'pizza-detail',
            templateUrl: 'app/pizza-detail.component.html',
            styleUrls: ['app/pizza-detail.component.css']
        }), 
        __metadata('design:paramtypes', [pizza_service_1.PizzaService, checkout_service_1.CheckoutService, router_1.ActivatedRoute, router_1.Router])
    ], PizzaDetailComponent);
    return PizzaDetailComponent;
}());
exports.PizzaDetailComponent = PizzaDetailComponent;
//# sourceMappingURL=pizza-detail.component.js.map