import React, { Component } from 'react';
import {FILTER_VALUE} from '../../consts';

class RefineSearchView extends Component {
    render() {
        const {onChange, filterValue} = this.props;
        return (
            <div className="refine-search">
                <div className="title">
                    Refine your search
                </div>
                <div className="slider-wrapper">
                    <div className="min-value">
                        Rs. 0
                    </div>
                    <div className="max-value">
                        Rs. 10000
                    </div>
                    <div className="slider-control">
                        <input 
                            type="range" 
                            min="0" 
                            max="10000" 
                            title={filterValue}
                            defaultValue={FILTER_VALUE.INITIAL_VALUE} 
                            className="slider" 
                            onChange={(event) => onChange(event.target.value)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default RefineSearchView;
