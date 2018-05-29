// lodash
import get from 'lodash/get';

export const INITIAL_STATE = {
    sLoading: false,
    loadingMessage: '',
    actionsLoaded: {},
    activeTooltipID: null,
    forcePageNotFound: false,
    pageNotFound: false,
    orderComplete: false,
};

export default function appReducer(state = INITIAL_STATE, action = {}) {
    const actionType = get(action, 'type', '');

    if (actionType && actionType.indexOf('.FAILED') > 0) {
        return {
            ...state,
            isLoading: false,
        };
    }
    switch (actionType) {
        default:
            return state;
    }
}
