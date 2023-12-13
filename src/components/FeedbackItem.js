import React from 'react';
import PropTypes from 'prop-types'
import Card from '../shared/Card';

const FeedbackItem = ({item}) => {
  const {id, rating, text} = item;

  return (
   <Card reverse={rating > 9 ? true : false}>
    <div className="num-display">{rating}</div>
    <div className="text-display">{text}</div>
   </Card>
  )
}


Card.propTypes = {
  item: PropTypes.object.isRequired,
}




export default FeedbackItem