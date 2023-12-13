import React from 'react';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({feedbackItems}) => {

  
  let content = 'Sorry no items exist';
  if(feedbackItems.length > 0){
    content = feedbackItems.map((item) => <FeedbackItem item={item} key={item.id}/>)
  }

  console.log(content)
  return (
    <div className='feedback-list'>{content}</div>
  )
}

export default FeedbackList