import React, { useState } from 'react';
import Card from '../shared/Card.js';
import Button from '../shared/Button.js';
import Ratings from './Ratings.js';
import { v4 as uuidv4 } from 'uuid';

const FeedbackForm = ({addFeedback}) => {
  
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
 

  function handleTextChange(e){
    if(text === ''){
      setBtnDisabled(true);
      setMessage(null)
    }else if(text.trim().length <= 10){
      setBtnDisabled(true)
      setMessage('Text must be at least 10 chars')
    }else{
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }


function selectedRating(selected){
   setRating(selected)
}
 


function handleSubmit(e){
    e.preventDefault();
    if(text.trim().length > 10){
      const feedbackObj = {
        id: uuidv4(),
        text: text,
        rating: rating,
      }
      addFeedback(feedbackObj)
    }

    setText('');
    setBtnDisabled(true);
    setRating(0)
}




  return (
    <Card>
    <form onSubmit={handleSubmit}>
      <h2>How would you rate your service with us?</h2>
      <Ratings onSelectRating={selectedRating}/>
     
      <div className='input-group'>
        <input
          onChange={handleTextChange}
          type='text'
          placeholder='Write a review'
          value={text}
        />
        <Button type='submit' isDisabled={btnDisabled}>
          Send
        </Button>
      </div>

      {message && <div className='message'>{message}</div>}
    </form>
  </Card>
  )
}

export default FeedbackForm