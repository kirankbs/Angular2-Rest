import { Toppings } from './Toppings'
import { Crust } from './Crust'

export class Pizza{
    pizzaName: String;
    price: number;
    toppingsList: Toppings[];
    crust: Crust;
}