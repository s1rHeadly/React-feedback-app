import React from 'react';
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

export default FeedbackItem