import React from 'react';
import PropTypes from 'prop-types'

const Header = ({text, bgColor, textColor}) => {

  const styles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={styles}>
      <div className="container">
      <h2>{text}</h2>
      </div>
    </header>
  )
}


Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}


Header.defaultProps = {
  text: 'Feedback App',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}


export default Header