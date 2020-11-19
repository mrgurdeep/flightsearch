import React from 'react';
import {shallow, configure} from 'enzyme';
import {expect} from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import {BOOKING_TYPE, FILTER_VALUE} from '../consts';
import {getFlights} from '../services/flights';

import App from '../components/App';
import SeachPanelView from '../components/searchPanelView';
import TabView from '../components/searchPanelView/TabView';
import RefineSearchView from '../components/searchPanelView/RefineSearchView';
import ResultsView from '../components/resultsView';
import TripDetailsView from '../components/resultsView/TripDetailsView';
import FlightDetailsView from '../components/resultsView/FlightDetailsView';

configure({ adapter: new Adapter() });

const flights = getFlights({
    originCity: 'PNQ',
    departureCity: 'DEL'
});

it('renders app with title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.header-title')).to.have.length(1);
});

it('renders search-panel', () => {
    const wrapper = shallow(<SeachPanelView />);
    expect(wrapper.find('.search-panel')).to.have.length(1);
});

it('renders tabs', () => {
    const wrapper = shallow(<TabView />);
    expect(wrapper.find('.tabs')).to.have.length(1);
});

it('renders selected', () => {
    const wrapper = shallow(
        <TabView 
            isSelected
        />
    );
    expect(wrapper.find('.tabs .selected')).to.have.length(1);
});

it('renders RefineSearchView', () => {
    const wrapper = shallow(<RefineSearchView />);
    expect(wrapper.find('.refine-search')).to.have.length(1);
});

it('renders ResultsView', () => {
    const wrapper = shallow(<ResultsView />);
    expect(wrapper.find('.no-flights')).to.have.length(1);
});

it('renders ResultsView with flights with trip summary', () => {
    const wrapper = shallow(
        <ResultsView 
            flights={flights}
            originCity="PNQ"
            departureCity="DEL"
            departureDate="2018-06-09"
            returnDate="2018-06-11"
        />
    );
    expect(wrapper.find('.trip-summary')).to.have.length(1);
});

it('renders TripDetailsView with flights', () => {
    const flight = flights[0];
    const wrapper = shallow(
        <TripDetailsView 
            flight={flight}
        />
    );
    expect(wrapper.find('.flight')).to.have.length(1);
});

it('renders FlightDetailsView with flight number', () => {
    const {departingFlight} = flights[0];
    const wrapper = shallow(
        <FlightDetailsView 
            {...departingFlight}
        />
    );
    expect(wrapper.find('.flight-number')).to.have.length(1);
});

