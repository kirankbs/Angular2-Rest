"use strict";
var router_1 = require('@angular/router');
var pizzas_component_1 = require('./pizzas.component');
var dashboard_component_1 = require('./dashboard.component');
var pizza_detail_component_1 = require('./pizza-detail.component');
var checkout_component_1 = require('./checkout.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/pizzas',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:name',
        component: pizza_detail_component_1.PizzaDetailComponent
    },
    {
        path: 'pizzas',
        component: pizzas_component_1.PizzasComponent
    },
    {
        path: 'checkout',
        component: checkout_component_1.CheckoutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map