import { Routes, RouterModule } from '@angular/router';
import { PizzasComponent } from './pizzas.component';
import { DashboardComponent } from './dashboard.component'
import { PizzaDetailComponent } from './pizza-detail.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/pizzas',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:name',
        component: PizzaDetailComponent
    },
    {
        path: 'pizzas',
        component: PizzasComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);