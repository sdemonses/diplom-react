import React, {PureComponent} from "react";
import { Field, reduxForm } from 'redux-form'

class FormFound extends PureComponent {
    static propTypes = {
        
    };

    static defaultProps = {
        route: {}

    };


    render() {
        return (
            <form className="search-container" onSubm>
                    <Field className="search-input" type="text"/>
                    <button className="search-arrow"><i className="glyphicon glyphicon-transfer"></i></button>
                    <Field className="search-input" type="text"/>
                    <Field className="search-date search-input" type="date"/>
                    <button type="submit" className="search-button" >search</button>
            </form>
        );
    }

}

export default FormFound;

