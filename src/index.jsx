import React from 'react';
import {render} from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './redux/store';
import routesConstants from './constants/routeConstants';

import Root from './Root';
import {BrowserRouter} from "react-router-dom"

const mount = document.getElementById('root');

export function init() {

    const history = createBrowserHistory();

    render(<BrowserRouter>
            <Root store={store} history={history} allowedRoutes={routesConstants}/>
        </BrowserRouter>,
        mount,
    );
}

init();
