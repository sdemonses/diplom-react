import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './../../assets/css/base.css'
class SearchResult extends PureComponent {

    static propTypes = {
        route: PropTypes.shape({
            date: PropTypes.string,
            arriveTime: PropTypes.string,
            departureTime: PropTypes.string,
            departureStation: PropTypes.string,
            arriveStation: PropTypes.string,
            departureTown: PropTypes.string,
            arriveTown: PropTypes.string,
            cost: PropTypes.string,
            availablePlaces: PropTypes.string,
            duration: PropTypes.string,
        }),
    };

    static defaultProps = {
        route: {}

    };



    render() {
        const {
            route
        } = this.props;

        return (
            <div className="result-item">
                <div className="start">
                    <div className="start-container">
                        <div className="start-city"> {route.departureTown}</div>
                        <div className="start-date">
                            <p>{route.date}</p>
                            <p className="time">{route.departureTime}</p>
                        </div>
                    </div>
                    <p>{route.departureStation}</p>
                </div>
                <div className="result-duration">
                    {route.duration}
                </div>
                <div className="end">
                    <div className="end-container">
                        <div className="end-city">{route.arriveTown}</div>
                        <div className="end-date">
                            <p>30.06.2018</p>
                            <p className="time">{route.arriveTime}</p>
                        </div>
                    </div>
                    <p>{route.arriveStation}</p>
                </div>
                <div className="info">
                    <div className="price"> 856 UAH</div>
                    <a className="buy-button" href="../details" >buy</a>
                    <div className="seats">{route.availablePlaces} seats available</div>
                </div>
            </div>
        );
    }

}

export default SearchResult;

