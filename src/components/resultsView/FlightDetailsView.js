import React from 'react';

const FlightDetailsView = ({
    arrivalTime,
    departureCity,
    departureTime,
    flightNumber,
    originCity
}) => {
    return (
        <div>
            <div className="flight-number">
                {flightNumber}
            </div>
            <div className="city-info">
                {`${originCity} > ${departureCity}`}
            </div>
            <div className="depart">
                <span>Depart: {departureTime}</span>
            </div>
            <div className="arrive">
                <span>Arrive: {arrivalTime}</span>
            </div>
        </div>
    );
}

export default FlightDetailsView;
