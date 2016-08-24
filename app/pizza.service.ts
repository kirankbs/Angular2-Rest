import { Headers, Http, Response }          from '@angular/http'
import {Injectable}                         from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Pizza }                            from './Pizza';
import { Toppings }                          from './Toppings'
import { Crust }                             from './Crust'   
import { ToppingsList }                       from './mock-pizzas';
import { CrustsList }                       from './mock-pizzas';

@Injectable()
export class PizzaService{

    private _pizzassUrl = 'http://10.30.125.95:9082/';

    private headers = new Headers([{
          'Content-Type': 'application/json'},
          {'Access-Control-Allow-Origin':'*'}
            ]);

    constructor(private http: Http){}

    getPizzas() {
            let headers1 = new Headers([{
          'Content-Type': 'application/json'},
          {'Access-Control-Allow-Origin':'*'}
            ]);
        return this.http.get(this._pizzassUrl+"pizzas", {headers: headers1})
            .map(response => response.json());        
    }
    getToppings() {
        return this.http.get(this._pizzassUrl+"toppings", {headers: this.headers})
            .map(response => response.json());
    }

    getCrusts(){
          return this.http.get(this._pizzassUrl+"crusts", {headers: this.headers})
            .map(response => response.json());
    }

    getPizza(name: String) {
        return this.getPizzas().map(pizzas => pizzas.find(pizza => pizza.pizzaName === name))
    }

    postPizzaOrder(pizzas: Pizza[]) {
        let price = 0;                 
         pizzas.forEach(element => {
             price += element.price;
         });   
         let serviceTax = (price * 13.5)/100;
         let vat = (price * 10.5)/100
         return price + serviceTax + vat;
    }

    private handleError(error: any): Promise<any> {
         console.error('An error occurred', error);
         return Promise.reject(error.message || error);
    }
}
