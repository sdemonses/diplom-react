import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/base.css'
import './detail.css';

export default class Main extends Component {
    static propTypes = {};

    static defaultProps = {};

    onFormSubmit = (data = {}) => {

    };

    render() {
        return (
            <div data-test="login-login-form" className="main-container">
                <div className="detail-container">
                    <div className="result-item">
                        <div className="start">
                            <div className="start-container">
                                <div className="direction"> FROM :</div>
                                <div className="start-city"> kiev</div>
                                <div className="start-date">
                                    <p>30.06.2018</p>
                                    <p className="time">14:00</p>
                                </div>
                            </div>
                            <p>Kiev Central Bus Station</p>
                        </div>
                        <div className="end">
                            <div className="end-container">
                                <div className="direction">To:</div>
                                <div className="end-city">lviv</div>
                                <div className="end-date">
                                    <p>30.06.2018</p>
                                    <p className="time">22:00</p>
                                </div>
                            </div>
                            <p>Lviv Second Bus Station</p>
                        </div>
                    </div>
                    <div className="detail-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2594223.0547690615!2d24.507448131331074!3d50.58212876599235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!3m2!1d50.4501!2d30.5234!4m5!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!3m2!1d49.839683!2d24.029716999999998!5e0!3m2!1sru!2sua!4v1528967854518"
                            width="600" height="350" className="map" allowfullscreen></iframe>
                    </div>
                </div>
                <button type="submit" className="search-button" >choose seats</button>
                <div className="seats">? seats available</div>
            </div>
        );
    }
}
