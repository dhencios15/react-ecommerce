import React from 'react';

import './FormInput.style.scss';

const FormInput = ({ label, register, name, ...otherProps }) => {
  return (
    <div className='group'>
      <input
        className='form-input'
        name={name}
        ref={register}
        {...otherProps}
        autoComplete='off'
      />
      {label ? (
        <label
          className={`${otherProps.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
