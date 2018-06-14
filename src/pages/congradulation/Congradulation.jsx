import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/base.css'
import './congradulation.css';

export default class Congradulation extends Component {
    static propTypes = {};

    static defaultProps = {};

    onFormSubmit = (data = {}) => {

    };

    render() {
        return (
            <div  className="main-container congr">
        
                                    <p>You have been Booked a ticket for Kiev - Lviv </p>
            
            </div>
        );
    }
}
