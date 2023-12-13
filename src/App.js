import { useState, useEffect } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList.js';
import FeedbackStats from './components/FeedbackStats.js';
import FeedbackForm from './components/FeedbackForm.js'

const App = () => {
  //state
  const [feedbackItems, setFeedbackItems] = useState(function(){
    const stored = localStorage.getItem('feedback');
    return JSON.parse(stored) || [];
});


  //derived state
  const totalItems = feedbackItems.length;

  let averageRating = feedbackItems?.reduce((total, item) => {
    const {rating} = item;
    total += rating
    return total
  }, 0);

  averageRating = averageRating / totalItems






  // functions
  function handleDelete(id){
   if(window.confirm('Are you sure you want to delete this item')){
    setFeedbackItems((prevState) => prevState.filter((item) => item.id !== id))
   }
  }



  function addFeedback(item){
      setFeedbackItems((prevState) => [
        ...prevState, item
      ])
  }





  //effects
  useEffect(() => {
   localStorage.setItem('feedback', JSON.stringify(feedbackItems))
  }, [feedbackItems]);

  return (
   <>
     <Header />
      <div className="container">
      <FeedbackForm addFeedback={addFeedback}/>
      <FeedbackStats totalItems={totalItems} averageRating={averageRating}/>
        <FeedbackList feedbackItems={feedbackItems} onHandleDelete={handleDelete}/>
      </div>
   </>
  );
}




export default App;
