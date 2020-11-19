import React from 'react';
import classNames from 'classnames';

const TabView = ({
    message, 
    clickHandler,
    isSelected
}) => {
    const tabClassName = classNames('tabs', {
        selected: isSelected
    });
    return (
        <div className={tabClassName} onClick={clickHandler}>
            {message}   
        </div>
    );
};

export default TabView;