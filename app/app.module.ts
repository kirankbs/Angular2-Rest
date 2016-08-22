import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';


import { XHRBackend }                        from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';



import { AppComponent }         from './app.component';
import { PizzasComponent }      from './pizzas.component';
import { PizzaDetailComponent}  from './pizza-detail.component';
import { PizzaService }         from './pizza.service';
import { routing }              from './app.routing';
import { DashboardComponent }   from './dashboard.component'

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      routing,
      HttpModule
       ],
  declarations: [ 
      AppComponent,
      PizzasComponent,
      PizzaDetailComponent ,
      DashboardComponent
      ],
      providers: [
          PizzaService,
          { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
          { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
      ],
  bootstrap:    [ 
      AppComponent 
      ]
})
export class AppModule { }