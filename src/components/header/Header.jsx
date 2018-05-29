import React, {PureComponent} from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import style from './Header.scss';

class Header extends PureComponent {
    render() {
        return (
            <header>
                <div className={style.headerContainer}>
                    <div className={bootstrap.container}>
                        <div className={bootstrap.row}>
                            <nav className={bootstrap.navbar}>
                                <h2>PAYBUS</h2>
                                <a href={'/login'}> Sign In</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;

