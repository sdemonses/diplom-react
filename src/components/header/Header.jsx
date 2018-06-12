import React, {PureComponent} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './../../assets/css/base.css'
import './header.css'
class Header extends PureComponent {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand logo" href="../">Paybus</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="../login">Sign in</a></li>
                            <li><a className="test" href="../signup">Sign up</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Header;

