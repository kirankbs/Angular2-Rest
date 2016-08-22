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
var Pizza_1 = require("./Pizza");
var PizzaDetailComponent = (function () {
    function PizzaDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Pizza_1.Pizza)
    ], PizzaDetailComponent.prototype, "pizza", void 0);
    PizzaDetailComponent = __decorate([
        core_1.Component({
            selector: 'pizza-detail',
            template: "\n        <div *ngIf=\"pizza\">\n        <h2>{{pizza.pizzaName}}</h2>\n        <div><label>Toppings: </label><span *ngFor= \"let topping of pizza.toppingsList\">{{topping.toppingName}} </span></div>\n        <div><label>Crust: </label>{{pizza.crust.name}}</div>\n        <div><label>Price: </label>{{pizza.price}}</div>\n        <div>\n            <label>Toppings: </label>\n            <div *ngFor= \"let topping of pizza.toppingsList\"><input [(ngModel)]=\"topping.toppingName\" placeholder=\"topping\"></div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PizzaDetailComponent);
    return PizzaDetailComponent;
}());
exports.PizzaDetailComponent = PizzaDetailComponent;
//# sourceMappingURL=pizza-detail.component.js.map