import { Pizza } from './Pizza';
import { PizzasList } from './mock-pizzas';

import {Injectable} from '@angular/core';

@Injectable()
export class PizzaService{

    constructor(){}

    private _pizzassUrl = 'http://172.17.8.101:9082/pizzas';
    getPizzas(): Promise<Pizza[]> {
        return Promise.resolve(PizzasList);
    }
    getPizza(){}
}
