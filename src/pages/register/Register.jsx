import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../assets/css/base.css'
import './register.css';

export default class Register extends Component {
    static propTypes = {};

    static defaultProps = {};

    onFormSubmit = (data = {}) => {

    };

    render() {
        return (
            <div className="container">
                <form className="register-form">
                    <h1 className="logo">Paybus</h1>
                    <h2 className="headline">SignUp</h2>
                    <input className="input-email" type="name" placeholder="Name" />
                    <input className="input-email" type="name" placeholder="Last Name" />
                    <input className="input-email" type="email" placeholder="email" />
                    <input className="input-email" type="phone" placeholder="phone" />
                    <input  className="input-password" type="password" placeholder="password" />
                    <button className="go" type="submit">Let's Go</button>
                    <a className="link" href="./login">Have account?</a>
                </form>
            </div>
        );
    }
}
