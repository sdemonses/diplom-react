import React, {PureComponent} from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import style from './Header.scss';
import classNames from 'classnames';

class Header extends PureComponent {
    render() {
        const styleClass = classNames(bootstrap.navbar, bootstrap["navbar-expand-lg"], bootstrap["navbar-light"], bootstrap["fixed-top"], style.mainNav);
        return (

            <nav className={styleClass}>
                <div className={bootstrap.container}>
                    <a className={bootstrap["navbar-brand"]} href="/">PAYBUS</a>
                    <button className={classNames(bootstrap["navbar-toggler "], bootstrap["navbar-toggler-right"])} type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        Menu
                    </button>
                    <div className={classNames(bootstrap.collapse, bootstrap["navbar-collapse"])} id="navbarResponsive">
                        <ul className={classNames(bootstrap["navbar-nav"], bootstrap["m1-auto"])}>
                            <li className={style["nav-item"]}>
                                <a className={style["nav-link"]} href={"/login"}>Sign In</a>
                            </li>
                            <li className={style["nav-item"]}>
                                <a className={style["nav-link"]} href={"/register"}>Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Header;

