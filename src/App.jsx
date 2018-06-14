import React, {Component} from 'react';
import PropTypes from 'prop-types';
// redux
import {connect} from 'react-redux';
// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LoadingScreen from './components/loading-screen/LoadingScreen';
import NotFound from './pages/not-found/NotFound';
// styles
import styles from './App.scss';
import './assets/css/base.css'


export class App extends Component {

    static propTypes = {
        globalError: PropTypes.shape({
            code: PropTypes.string,
            message: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.array,
            ]),
            body: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.array,
            ]),
        }),
        isLoading: PropTypes.bool,
        loadingMessage: PropTypes.string,
        pageNotFound: PropTypes.bool,
        children: PropTypes.node,
        location: PropTypes.objectOf(PropTypes.string),
    };

    static defaultProps = {
        globalError: undefined,
        browseUrl: '',
        basketUrl: '',
        isLoading: false,
        orderComplete: false,
        loadingMessage: '',
        pageNotFound: false,
        children: null,
        location: {},
    };

    render() {
        const {
            children,
            globalError,
            isLoading,
            loadingMessage,
            location,
            pageNotFound,
        } = this.props;

        let mainContent = children;

        if (globalError) {
            mainContent = (
                <div >
                    asdasd
                </div>
            );
        } else {
            if (pageNotFound) {
                mainContent = <NotFound location={location}/>;
            }
        }

        return (
            <div className={styles.App}>
                <Header/>
                <main id="main" className="container basic-container" >
                    <LoadingScreen show={isLoading} message={loadingMessage}/>
                    {mainContent}
                </main>
                <Footer/>
            </div>
        );
    }
}

export default connect(state => ({
    isLoading: state.app.isLoading,
    loadingMessage: state.app.loadingMessage,
    pageNotFound: state.app.pageNotFound,
}))(App);
