import React from 'react';
import PropTypes from 'prop-types';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import routes from './routes';


const Root = ({store, history, allowedRoutes}) => (

    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes(allowedRoutes)}
        </ConnectedRouter>
    </Provider>

);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    allowedRoutes: PropTypes.object.isRequired,
};

Root.defaultProps = {
    store: {},
    history: {},
    allowedRoutes: {},
};

export default Root;
