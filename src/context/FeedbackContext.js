import {useState, createContext } from "react";

// create Conteext
const FeedbackContext = createContext();

const initialValue = [
  {
    id: 1,
    text: 'Some simple text',
    rating: 7,
  },
  {
    id: 3,
    text: 'Some simple text 2',
    rating: 5,
  }
]


// create provider and export it (note how its just another function)
export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState(initialValue)


  return (
    <FeedbackContext.Provider value={feedback}>
    {children}
  </FeedbackContext.Provider>
  )

}




export default FeedbackContext;
