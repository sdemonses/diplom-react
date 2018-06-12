import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router';

import App from './App';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import Register from './pages/register/Register';

//
import NotFound from './pages/not-found/NotFound';


const AppRoute = connect(state => ({
    location: state.routing.location,
}))(App);

const ConnectedSwitch = connect(state => ({
    location: {
        ...state.routing.location,
    },
}))(Switch);

export default function routes(routes) {

    return (
        <AppRoute>

            <ConnectedSwitch>

                <Route exact path={routes.LOGIN} component={Login}/>
                <Route exact path={routes.MAIN} component={Main}/>
                <Route exact path={routes.REGISTER} component={Register}/>

                <Route component={NotFound}/>

            </ConnectedSwitch>

        </AppRoute>
    );
}