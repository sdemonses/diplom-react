import React from 'react';
import { render } from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './redux/store';
import routesConstants from './constants/routeConstants';

import Root from './Root';

const mount = document.getElementById('root');

export function init() {

    const history = createBrowserHistory();

    render(
        <Root store={store} history={history} allowedRoutes={routesConstants} />,
        mount,
    );
}

init();