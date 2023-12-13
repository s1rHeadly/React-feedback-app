import React from 'react';
import PropTypes from 'prop-types'
import Card from '../shared/Card';
import { FaTimes } from "react-icons/fa";


const FeedbackItem = ({item, onHandleDelete}) => {
  const {id, rating, text} = item;

  return (
   <Card reverse={rating > 9 ? true : false}>
    <div className="num-display">{rating}</div>
    <button onClick={() => onHandleDelete(id)} className="close">
    <FaTimes color="purple"/>
    </button>
    <div className="text-display">{text}</div>
   </Card>
  )
}


Card.propTypes = {
  item: PropTypes.object
}




export default FeedbackItem