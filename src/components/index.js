import {connect} from 'react-redux'
import {getFlights, changeSlider} from '../actions'
import App from './App';
import {FILTER_VALUE} from '../consts';

const mapStateToProps = (state) => {
    return {
        flights: state.app.flights,
        searchValues: state.app.searchValues,
        filterValue: state.app.filterValue || FILTER_VALUE.INITIAL_VALUE
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFlights: (data) => dispatch(getFlights(data)),
        changeSlider: (data) => dispatch(changeSlider(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)