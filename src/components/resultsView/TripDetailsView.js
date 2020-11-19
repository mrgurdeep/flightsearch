import React, { Component } from 'react';
import FlightDetailsView from './FlightDetailsView';
import {CURRENCY} from '../../consts';

class TripDetailsView extends Component {
    render() {
        const {
            flight: {
                price,
                departingFlight,
                returnFlight
            }
        } = this.props;
        return (
            <div className="flight">
                <div className="price">
                    {`${CURRENCY} ${price}`}
                </div>
                <div className="flight-info">
                    {
                        departingFlight && 
                        <FlightDetailsView 
                            {...departingFlight}
                        />
                    }
                </div>
                <div className="flight-info">
                    {
                        returnFlight && 
                        <FlightDetailsView 
                            {...returnFlight}
                        />
                    }
                </div>
                <div className="flight-info button-container">
                    <button>
                        Book this flight
                    </button>
                </div>
            </div>
        );
    }
}

export default TripDetailsView;
