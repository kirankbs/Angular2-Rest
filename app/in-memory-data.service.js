"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var pizzas = [
            { "pizzaName": "Margherita", "price": 150.0, "toppingsList": [{ "toppingName": "Tomato", "price": 10.0 }], "crust": { "name": "Regular", "price": 0.0 } },
            { "pizzaName": "Veg. Hawaiian Delight", "price": 200.0, "toppingsList": [{ "toppingName": "Jalapeno", "price": 15.0 }], "crust": { "name": "Regular", "price": 0.0 } },
            { "pizzaName": "NonVeg. Hawaiian Delight", "price": 220.0, "toppingsList": [{ "toppingName": "Barbeque Chicken", "price": 100.0 }], "crust": { "name": "Regular", "price": 0.0 } },
            { "pizzaName": "Veggie Paradise", "price": 230.0, "toppingsList": [{ "toppingName": "Tomato", "price": 10.0 }, { "toppingName": "Olives", "price": 15.0 }], "crust": { "name": "Regular", "price": 0.0 } },
            { "pizzaName": "Peppy Paneer", "price": 230.0, "toppingsList": [{ "toppingName": "Jalapeno", "price": 15.0 }, { "toppingName": "Olives", "price": 15.0 }], "crust": { "name": "Regular", "price": 0.0 } },
            { "pizzaName": "Zesty Chicken", "price": 280.0, "toppingsList": [{ "toppingName": "Barbeque Chicken", "price": 100.0 }], "crust": { "name": "Regular", "price": 0.0 } },
            { "pizzaName": "Chicken Maxicana", "price": 300.0, "toppingsList": [{ "toppingName": "Cheese", "price": 20.0 }, { "toppingName": "Barbeque Chicken", "price": 100.0 }, { "toppingName": "Jalapeno", "price": 15.0 }], "crust": { "name": "Regular", "price": 0.0 } }
        ];
        return { pizzas: pizzas };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map