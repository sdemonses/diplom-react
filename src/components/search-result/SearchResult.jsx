import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './../../assets/css/base.css'
class SearchResult extends PureComponent {
    render() {
        return (
            <div className="result-item">
                <div className="start">
                    <div className="start-container">
                        <div className="start-city"> {route.departureTown}</div>
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
                    <a className="buy-button" href="../details" >buy</a>
                    <div className="seats">5 seats available</div>
                </div>
            </div>
        );
    }

}

export default SearchResult;

