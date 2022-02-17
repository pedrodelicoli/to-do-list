import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const {
    inputType,
    handleChange,
    placeholder,
    className,
    id,
    testId,
  } = props;
  return (
    <input
      id={id}
      type={inputType}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      data-testid={testId}
    />

  );
}

const { string, func } = PropTypes;

Input.propTypes = {
  labelText: string.isRequired,
  inputType: string.isRequired,
  handleChange: func.isRequired,
  placeholder: string,
  className: string,
  id: string,
  testId: string.isRequired,
};

export default Input;
