"use strict";
var InMemoryToppingsService = (function () {
    function InMemoryToppingsService() {
    }
    InMemoryToppingsService.prototype.createDb = function () {
        var toppings = [
            { "toppingName": "Olives", "price": 15.0 },
            { "toppingName": "Jalapeno", "price": 15.0 },
            { "toppingName": "Cheese", "price": 20.0 },
            { "toppingName": "Barbeque Chicken", "price": 100.0 },
            { "toppingName": "Tomato", "price": 10.0 }
        ];
        return { toppings: toppings };
    };
    return InMemoryToppingsService;
}());
exports.InMemoryToppingsService = InMemoryToppingsService;
//# sourceMappingURL=in-memory-toppings.service.js.map