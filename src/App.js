import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './utils/data.js';
import FeedbackList from './components/FeedbackList.js';

const App = () => {

  const [feedbackItems, setFeedbackItems] = useState(FeedbackData);
  return (
   <>
     <Header />
      <div className="container">
        <FeedbackList feedbackItems={feedbackItems}/>
      </div>
   </>
  );
}




export default App;
