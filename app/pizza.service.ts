import { Headers, Http, Response }             from '@angular/http'
import {Injectable}         from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Pizza }            from './Pizza';
import { PizzasList }       from './mock-pizzas';

@Injectable()
export class PizzaService{

    //private _pizzassUrl = 'http://localhost:9082/pizzas';
    private _pizzassUrl = 'app/pizzas';

    constructor(private http: Http){}

    getPizzas(): Promise<Pizza[]> {
        let headers = new Headers([{
      'Content-Type': 'application/json'},
      {'Access-Control-Allow-Origin':'*'}
        ]);

        //return Promise.resolve(PizzasList);
        return this.http.get(this._pizzassUrl, {headers: headers})
                    .toPromise()
                    .then(response => response.json().data as Pizza[])
                    .catch(this.handleError);
    }
    
    getPizzasSlowly(): Promise<Pizza[]>{
        return new Promise(resolve => 
            setTimeout(() => resolve(PizzasList),2000)
        );
    }

    getPizza(name: String): Promise<Pizza> {
        return this.getPizzas().then(pizzas => pizzas.find(pizza => pizza.pizzaName === name))
    }

    save(pizza: Pizza): Promise<Pizza>  {
    if (pizza.pizzaName) {
      return this.put(pizza);
    }
    return this.post(pizza);
  }

  delete(pizza: Pizza): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this._pizzassUrl}/${pizza.pizzaName}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private post(pizza: Pizza): Promise<Pizza> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(this._pizzassUrl, JSON.stringify(pizza), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  private put(pizza: Pizza): Promise<Pizza> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this._pizzassUrl}/${pizza.pizzaName}`;
    return this.http
               .put(url, JSON.stringify(pizza), {headers: headers})
               .toPromise()
               .then(() => pizza)
               .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
         console.error('An error occurred', error);
         return Promise.reject(error.message || error);
    }
}
