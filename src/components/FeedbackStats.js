import React from 'react'

const FeedbackStats = ({totalItems, averageRating}) => {
  return (
    <div className='feedback-stats'>
      <h4>{totalItems} Reviews</h4>
    
      <h4>Average Rating: {averageRating.toFixed(1).replace(/[.,]0$/, '') }</h4>
    </div>
  )
}

export default FeedbackStats