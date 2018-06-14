import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/base.css'
import './main.css';
import {findRoutes} from '../../redux/actions/app/appAction'
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link, withRouter} from 'react-router-dom';
import {Form} from 'redux-form';



class Main extends Component {
    static propTypes = {
        findRoutes: PropTypes.func.isRequired,
    };

    static defaultProps = {
        findRoutes: () => {}
    };

    onFormSubmit = (data = {}) => {
        const {findRoutes} = this.props;
        console.warn(data);
        findRoutes(234);
        this.props.history.push({pathname: '/routes' })
    };

    render() {
        return (
            <div data-test="login-login-form" className="main-container">
                <div className="search-container">
                    <input className="search-input" type="text"/>
                    <button className="search-arrow"><i className="glyphicon glyphicon-transfer"></i></button>
                    <input className="search-input" type="text"/>
                    <input className="search-date search-input" type="date"/>
                    <button type="submit" className="search-button" onClick={this.onFormSubmit}>search</button>
                </div>
            </div>
        );
    }
}

export default connect(null, {
    findRoutes,
})(Main);
