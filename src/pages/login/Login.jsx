import React, {Component} from 'react';
import './login.css';

export default class Login extends Component {
    static propTypes = {};

    static defaultProps = {};

    onFormSubmit = (data = {}) => {

    };

    render() {
        return (
            <div className="container">
                <form className="login-form">
                    <h1 className="logo">Paybus</h1>
                    <h2 className="headline">SignIn</h2>
                    <input className="input-email" type="email" placeholder="email" />
                    <input  className="input-password" type="password" placeholder="password" />
                    <button className="go" type="submit">Let's Go</button>
                    <a className="link" href="./signup">Don't have an account?</a>
                </form>
            </div>
        );
    }
}
