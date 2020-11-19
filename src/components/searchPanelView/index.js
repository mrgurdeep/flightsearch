import React, { Component } from 'react';
import {BOOKING_TYPE} from '../../consts';
import FormView from './FormView';
import TabView from './TabView';
import RefineSearchView from './RefineSearchView';

class SearchPanelView extends Component {
    constructor() {
        super();
        this.state = {
            currentTab: BOOKING_TYPE.ONE_WAY
        }
        this.tabClickHandler = this.tabClickHandler.bind(this);
    }

    tabClickHandler (tabName) {
        this.setState({
            currentTab: tabName
        });
    }

    render() {
        const {currentTab} = this.state;
        const {handleSubmit, changeSlider, filterValue} = this.props;
        return (
            <div className="search-panel">
                <TabView 
                    clickHandler={() => this.tabClickHandler(BOOKING_TYPE.ONE_WAY)}
                    message="One Way"
                    isSelected={currentTab === BOOKING_TYPE.ONE_WAY}
                />   
                <TabView 
                    clickHandler={() => this.tabClickHandler(BOOKING_TYPE.ROUND_TRIP)}
                    message="Return"
                    isSelected={currentTab === BOOKING_TYPE.ROUND_TRIP}
                />
                <FormView 
                    currentTab={currentTab}
                    onSubmit={handleSubmit}
                />
                <RefineSearchView 
                    onChange={changeSlider}
                    filterValue={filterValue}
                />
            </div>
        );
    }
}

export default SearchPanelView;
