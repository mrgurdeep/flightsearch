import {FLIGHT_TYPE} from '../consts';

const getFlights = ({originCity, departureCity, departureDate, returnDate, passengers}) => {
    const flights = [
        {
            price: 2500,
            [FLIGHT_TYPE.DEPARTING]: {
                flightNumber: 'AI-202',
                originCity: originCity,
                departureCity: departureCity,
                departureTime: '10:00 AM',
                arrivalTime: '12:00 PM'
            },
            [FLIGHT_TYPE.RETURN]: {
                flightNumber: 'AI-203',
                originCity: departureCity,
                departureCity: originCity,
                departureTime: '08:00 PM',
                arrivalTime: '11:00 PM'
            }
        },
        {
            price: 3500,
            [FLIGHT_TYPE.DEPARTING]: {
                flightNumber: 'AI-202',
                originCity: originCity,
                departureCity: departureCity,
                departureTime: '10:00 AM',
                arrivalTime: '12:00 PM'
            },
            [FLIGHT_TYPE.RETURN]: {
                flightNumber: 'AI-203',
                originCity: departureCity,
                departureCity: originCity,
                departureTime: '08:00 PM',
                arrivalTime: '11:00 PM'
            }
        },
        {
            price: 4500,
            [FLIGHT_TYPE.DEPARTING]: {
                flightNumber: 'AI-202',
                originCity: originCity,
                departureCity: departureCity,
                departureTime: '10:00 AM',
                arrivalTime: '12:00 PM'
            },
            [FLIGHT_TYPE.RETURN]: {
                flightNumber: 'AI-203',
                originCity: departureCity,
                departureCity: originCity,
                departureTime: '08:00 PM',
                arrivalTime: '11:00 PM'
            }
        },
        {
            price: 5500,
            [FLIGHT_TYPE.DEPARTING]: {
                flightNumber: 'AI-202',
                originCity: originCity,
                departureCity: departureCity,
                departureTime: '10:00 AM',
                arrivalTime: '12:00 PM'
            },
            [FLIGHT_TYPE.RETURN]: {
                flightNumber: 'AI-203',
                originCity: departureCity,
                departureCity: originCity,
                departureTime: '08:00 PM',
                arrivalTime: '11:00 PM'
            }
        },
        {
            price: 6500,
            [FLIGHT_TYPE.DEPARTING]: {
                flightNumber: 'AI-202',
                originCity: originCity,
                departureCity: departureCity,
                departureTime: '10:00 AM',
                arrivalTime: '12:00 PM'
            },
            [FLIGHT_TYPE.RETURN]: {
                flightNumber: 'AI-203',
                originCity: departureCity,
                departureCity: originCity,
                departureTime: '08:00 PM',
                arrivalTime: '11:00 PM'
            }
        },
        {
            price: 7500,
            [FLIGHT_TYPE.DEPARTING]: {
                flightNumber: 'AI-202',
                originCity: originCity,
                departureCity: departureCity,
                departureTime: '10:00 AM',
                arrivalTime: '12:00 PM'
            },
            [FLIGHT_TYPE.RETURN]: {
                flightNumber: 'AI-203',
                originCity: departureCity,
                departureCity: originCity,
                departureTime: '08:00 PM',
                arrivalTime: '11:00 PM'
            }
        },
        {
            price: 8500,
            [FLIGHT_TYPE.DEPARTING]: {
                flightNumber: 'AI-202',
                originCity: originCity,
                departureCity: departureCity,
                departureTime: '10:00 AM',
                arrivalTime: '12:00 PM'
            },
            [FLIGHT_TYPE.RETURN]: {
                flightNumber: 'AI-203',
                originCity: departureCity,
                departureCity: originCity,
                departureTime: '08:00 PM',
                arrivalTime: '11:00 PM'
            }
        },
        {
            price: 9500,
            [FLIGHT_TYPE.DEPARTING]: {
                flightNumber: 'AI-202',
                originCity: originCity,
                departureCity: departureCity,
                departureTime: '10:00 AM',
                arrivalTime: '12:00 PM'
            },
            [FLIGHT_TYPE.RETURN]: {
                flightNumber: 'AI-203',
                originCity: departureCity,
                departureCity: originCity,
                departureTime: '08:00 PM',
                arrivalTime: '11:00 PM'
            }
        }
    ];

    const filteredFlights = [];

    flights.forEach((flight) => {
        const newFlight = {
            ...flight            
        }

        if (!returnDate) {
            delete newFlight[FLIGHT_TYPE.RETURN];
        }

        filteredFlights.push(newFlight);
    });

    return filteredFlights;
}

export {
    getFlights
};