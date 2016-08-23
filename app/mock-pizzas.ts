import { Pizza } from './Pizza';
import { Toppings } from './Toppings';
import { Crust }    from './Crust'


export const PizzasList: Pizza[] = [
    {"pizzaName":"Margherita","price":150.0,"toppingsList":[{"toppingName":"Tomato","price":10.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"Veg. Hawaiian Delight","price":200.0,"toppingsList":[{"toppingName":"Jalapeno","price":15.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"NonVeg. Hawaiian Delight","price":220.0,"toppingsList":[{"toppingName":"Barbeque Chicken","price":100.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"Veggie Paradise","price":230.0,"toppingsList":[{"toppingName":"Tomato","price":10.0},{"toppingName":"Olives","price":15.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"Peppy Paneer","price":230.0,"toppingsList":[{"toppingName":"Jalapeno","price":15.0},{"toppingName":"Olives","price":15.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"Zesty Chicken","price":280.0,"toppingsList":[{"toppingName":"Barbeque Chicken","price":100.0}],"crust":{"name":"Regular","price":0.0}},
    {"pizzaName":"Chicken Maxicana","price":300.0,"toppingsList":[{"toppingName":"Cheese","price":20.0},{"toppingName":"Barbeque Chicken","price":100.0},{"toppingName":"Jalapeno","price":15.0}],"crust":{"name":"Regular","price":0.0}}
    ];
export const ToppingsList: Toppings[] = [
    {"toppingName":"Olives","price":15.0},
    {"toppingName":"Jalapeno","price":15.0},
    {"toppingName":"Cheese","price":20.0},
    {"toppingName":"Barbeque Chicken","price":100.0},
    {"toppingName":"Tomato","price":10.0}
    ]; 

export const CrustsList: Crust[] = [
    {"name":"Regular","price":0.0},
    {"name":"Pan Pizza","price":100.0},
    {"name":"Thin Crust","price":150.0},
    {"name":"Cheese Burst","price":200.0}];