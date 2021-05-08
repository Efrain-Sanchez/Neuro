import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Details from './components/Details'
import NotFound from './pages/NotFound'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:Id" component={Details}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
export default App;