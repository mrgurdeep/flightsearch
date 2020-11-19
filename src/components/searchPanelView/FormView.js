import React, { Component } from 'react';
import _isEqual from 'lodash/isEqual';
import {Field, reduxForm} from 'redux-form';
import FieldView from '../fieldView';
import {required} from '../../utils/index';
import {BOOKING_TYPE, FORM_NAME} from '../../consts';

class FormView extends Component {
    componentWillReceiveProps(nextProps) {
        if(!_isEqual(this.props.currentTab, nextProps.currentTab)) {
            this.props.reset();
        }
    }

    render() {
        const {currentTab, handleSubmit} = this.props;
        return (
            <form className="form" onSubmit={handleSubmit}>
                <Field 
                    name="originCity"
                    type="text" 
                    placeholder="Enter Origin City" 
                    component={FieldView}
                    label="Origin City"
                    validate={[required]}
                />
                <Field
                    name="departureCity"
                    type="text" 
                    placeholder="Enter Destination City" 
                    component={FieldView}
                    label="Departure City"
                    validate={[required]}
                />
                <Field 
                    name="departureDate"
                    type="date"
                    component={FieldView}
                    label="Departure Date"
                    validate={[required]}
                />
                {
                    currentTab === BOOKING_TYPE.ROUND_TRIP &&
                    <Field 
                        name="returnDate"
                        type="date" 
                        component={FieldView}
                        label="Return Date"
                        validate={[required]}
                    />
                }
                <Field 
                    name="passengers"
                    type="number"
                    min="1"
                    component={FieldView}
                    label="Passengers"
                    validate={[required]}
                />
                <button type="submit">
                    Search
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: FORM_NAME.SEARCH_FORM
})(FormView);
