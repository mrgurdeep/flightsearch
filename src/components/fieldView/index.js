import React from 'react';

const FieldView = ({
    input,
    label,
    placeholder,
    defaultValue,
    type,
    meta: {touched, error}
}) => (
    <div className="field-wrapper">
        <label>{label}</label>
        <input 
            {...input} 
            placeholder={placeholder} 
            defaultValue={defaultValue}
            type={type} 
        />
        {
            touched &&
            ((error && <span className="error">{error}</span>))
        }
    </div>
);

export default FieldView;