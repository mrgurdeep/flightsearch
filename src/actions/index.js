import {getFlights as getFlightsService} from '../services/flights';
import {ACTION_TYPES} from '../consts';

export const getFlights = (data) => {
    return (dispatch) => {
        const flights = getFlightsService(data); 
        dispatch({
            type: ACTION_TYPES.GET_FLIGHTS_SUCCESS,
            payload: {
                flights,
                searchValues: data
            }
        });
    }
};

export const changeSlider = (value) =>({
    type: ACTION_TYPES.REFINE_SEARCH,
    payload: {
        filterValue: value
    }
});

