import React from 'react';
import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({feedbackItems, onHandleDelete}) => {

  
  let content = 'Sorry no items exist';
  if(feedbackItems.length > 0){
    content = feedbackItems.map((item) => <FeedbackItem item={item} key={item.id} onHandleDelete={onHandleDelete}/>)
  }

  return (
    <div className='feedback-list'>{content}</div>
  )
}

FeedbackList.propTypes = {
  feedbackItems: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    rating: PropTypes.number,
  }))
}

export default FeedbackList