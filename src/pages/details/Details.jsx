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
                        {/*<div className="result-duration">*/}
                            {/**/}
                        {/*</div>*/}
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

                    </div>
                </div>

                {/*<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1312687.52081317!2d32.23863707939907!3d50.01430131261039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e3!4m5!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!3m2!1d50.4501!2d30.5234!4m5!1s0x4127a09f63ab0f8b%3A0x2d4c18681aa4be0a!2z0KXQsNGA0LrRltCyLCDQpdCw0YDQutGW0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjA!3m2!1d49.9935!2d36.230382999999996!5e0!3m2!1suk!2sua!4v1528815079647" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>*/}
            </div>
        );
    }
}
