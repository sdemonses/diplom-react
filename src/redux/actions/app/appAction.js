import {FIND_ROUTES} from '../../../constants/actionConstants';
import { push } from 'react-router-redux'
export const findRoutes = data => {
    console.warn(data + 1);
    return dispatch => {
        dispatch({
            type: FIND_ROUTES,
            data
        });
        /*dispatch(push({pathname: '/routes' }));*/
    }

};