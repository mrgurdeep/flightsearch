import React, { Component } from 'react';
import SearchPanelView from './searchPanelView';
import ResultsView from './resultsView';
import '../css/style.css';

class App extends Component {
    render() {
        const {
            flights, 
            getFlights, 
            searchValues, 
            changeSlider, 
            filterValue
        } = this.props;
        return (
            <div className="container">
                <header className="header-title">
                    Flight Search Engine
                </header>
                <SearchPanelView 
                    handleSubmit={getFlights}
                    changeSlider={changeSlider}
                    filterValue={filterValue}
                />
                <ResultsView 
                    flights={flights}
                    filterValue={filterValue}
                    {...searchValues}
                />
            </div>
        );
    }
}

export default App;
