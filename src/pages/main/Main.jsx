import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/base.css'
import './main.css';

export default class Main extends Component {
    static propTypes = {};

    static defaultProps = {};

    onFormSubmit = (data = {}) => {

    };

    render() {
        return (
            <div data-test="login-login-form" className="main-container">
                <div className="search-container">
                    <input className="search-input" type="text"/>
                    <button className="search-arrow"> <i className="glyphicon glyphicon-transfer"></i></button>
                    <input className="search-input" type="text"/>
                    <input className="search-date search-input" type="date"/>
                    <button className="search-button" >search</button>
                </div>
                <div className="result-item">
                    <div className="start">
                        <div className="start-container">
                            <div className="start-city"> kiev</div>
                            <div className="start-date">
                                <p>30.06.2018</p>
                                <p className="time">14:00</p>
                            </div>
                        </div>
                        <p>Kiev Central Bus Station</p>
                    </div>
                    <div className="result-duration">
                        8h 0m
                    </div>
                    <div className="end">
                        <div className="end-container">
                            <div className="end-city">lviv</div>
                            <div className="end-date">
                                <p>30.06.2018</p>
                                <p className="time">22:00</p>
                            </div>
                        </div>
                        <p>Lviv Second Bus Station</p>
                    </div>
                    <div className="info">
                        <div className="price"> 856 UAH</div>
                        <button className="buy-button">buy</button>
                        <div className="seats">5 seats available</div>
                    </div>
                </div>
            </div>
        );
    }
}
