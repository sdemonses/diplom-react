// lodash
import get from 'lodash/get';
import {FIND_ROUTES} from '../../../constants/actionConstants';

export const INITIAL_STATE = {
    sLoading: false,
    loadingMessage: '',
    actionsLoaded: {},
    activeTooltipID: null,
    forcePageNotFound: false,
    pageNotFound: false,
    orderComplete: false,
    routes:[]
};
const routes =
    [{
        date: '30.08.2018',
        departureTime: '14.00',
        departureStation: 'Kiev Central Bus Station',
        departureTown: 'KIEV',
        arriveTime: '22.00',
        arriveStation: 'LVIV second Bus Station',
        arriveTown: 'LVIV',
        cost: '456',
        availablePlaces: '5',
        duration: '8.00',
    },
        {
            date: '30.08.2018',
            departureTime: '05.35',
            departureStation: 'Kiev Kharkov Area, 201',
            departureTown: 'KIEV',
            arriveTime: '23.45',
            arriveStation: 'LVIV First Bus Station',
            arriveTown: 'LVIV',
            cost: '250',
            availablePlaces: '10',
            duration: '7.50',
        },
        {
            date: '30.08.2018',
            departureTime: '11.55',
            departureStation: 'Kiev Central Park, 201',
            departureTown: 'KIEV',
            arriveTime: '04.45',
            arriveStation: 'LVIV First Bus Station',
            arriveTown: 'LVIV',
            cost: '433',
            availablePlaces: '7',
            duration: '8.30',
        },
        {
            date: '30.08.2018',
            departureTime: '7.16',
            departureStation: 'Kiev Olimpiskiy, 10',
            departureTown: 'KIEV',
            arriveTime: '02.00',
            arriveStation: 'LVIV First Bus Station',
            arriveTown: 'LVIV',
            cost: '300',
            availablePlaces: '1',
            duration: '11.00',
        }
    ];

export default function (state = INITIAL_STATE, action = {}){
    switch (action.type) {
        case FIND_ROUTES:
            return {
                ...state,
                routes
            };

        default:
            return state
    }
}
