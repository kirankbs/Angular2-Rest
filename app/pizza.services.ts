import { Pizza } from './Pizza';

import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PizzaServices{

    constructor(private _http: Http){}

    private _pizzassUrl = 'http://172.17.8.101:9082/pizzas';
 /*   getPizzas(){
        return this._http.get(this._pizzassUrl)
        .map(res => <Pizza[]>res.json())
        .catch(this.handleError);
    }
    getPizza(){}*/
}
