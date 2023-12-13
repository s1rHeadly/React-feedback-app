import React from 'react';
import PropTypes from 'prop-types'

const Button = ({children, type, isDisabled, onClick, version}) => {
  return (
    <button
    type={type}
    disabled={isDisabled}
    onClick={onClick}
    className={`btn btn-${version}`}>
    {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: true,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}


export default Button