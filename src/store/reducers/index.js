import {ACTION_TYPES} from '../../consts';

const appReducer = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case ACTION_TYPES.GET_FLIGHTS_SUCCESS:
            return {
                ...state,
                ...payload
            };
        case ACTION_TYPES.REFINE_SEARCH:
            return {
                ...state,
                ...payload
            };
        default:
            return state
    }
}

export default appReducer