import React, { Component } from 'react';
import _isEmpty from 'lodash/isEmpty';
import moment from 'moment';
import TripDetailsView from './TripDetailsView';
import {DATE_FORMAT} from '../../consts';

class ResultsView extends Component {
    render() {
        const {
            originCity, 
            departureCity,
            departureDate,
            returnDate,
            flights = [],
            filterValue
        } = this.props;

        let filteredFlights = flights;

        if (filterValue) {
            filteredFlights = flights.filter((flight) => {
                return flight.price <= filterValue
            });
        }

        if (_isEmpty(filteredFlights)) {
            return (
                <div className="results">
                    <div className="no-flights">
                        Please search for a flight using search panel or change filter criteria
                    </div>
                </div>
            );
        }

        let citySummary = `${originCity} > ${departureCity}`;
        
        if (returnDate) {
            citySummary = `${citySummary} > ${originCity}`;
        }

        return (
            <div className="results">
                <div className="trip-summary">
                    <div className="city-summary">
                        {citySummary}
                    </div>
                    <div className="date-summary">
                        <span>Depart: {moment(departureDate).format(DATE_FORMAT.DISPLAY_FORMAT)}</span>
                        {
                            returnDate &&
                            <span>Return: {moment(returnDate).format(DATE_FORMAT.DISPLAY_FORMAT)}</span>
                        }
                    </div>
                </div>
                {
                    filteredFlights.map((flight, index) => {
                        return <TripDetailsView
                            key={`${index}_key`}
                            flight={flight}
                        />;
                    })
                }
            </div>
        );
    }
}

export default ResultsView;
