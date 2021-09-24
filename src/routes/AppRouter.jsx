   
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React from 'react'
import { PrimeraVista } from '../views/PrimeraVista';
import { SegundaVista } from '../views/SegundaVista';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/primeravista" component={ PrimeraVista } />
                <Route exact path="/segundavista" component={ SegundaVista } />
            </Switch>
        </Router>
    )
}