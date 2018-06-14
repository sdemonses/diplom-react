import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearckResult from './../../components/search-result/SearchResult';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/base.css'
import './main.css';
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";

class FoundedItems extends Component {
    static propTypes = {
        routes: PropTypes.array
    };

    static defaultProps = {
        routes: []
    };

    onFormSubmit = (data = {}) => {

    };

    render() {
        const {
            routes
        } = this.props;

        return (
            <div data-test="login-login-form" className="main-container">
                <form className="search-container-routes">
                    <input className="search-input" type="text"/>
                    <button className="search-arrow"><i className="glyphicon glyphicon-transfer"></i></button>
                    <input className="search-input" type="text"/>
                    <input className="search-date search-input" type="date"/>
                    <button type="submit" className="search-button">search</button>
                </form>

                {
                    routes.map((route) =>
                        <SearckResult route={route}/>
                    )
                }
            </div>
        );
    }
}

export default withRouter(connect(state => ({
    routes: state.app.routes,
}))(FoundedItems));
