import React, {useState} from 'react'

const Ratings = ({onSelectRating}) => {

  const [selected, setSelected] = useState(0);

  function handleChange(e){
    setSelected(Number(e.target.value))
    onSelectRating(Number(e.target.value))
  }


  return (
    <ul className='rating'>
    {Array.from({ length: 10 }, (_, i) => (
      <li key={`rating-${i + 1}`}>
        <input
          type='radio'
          id={`num${i + 1}`}
          name='rating'
          value={i + 1}
          onChange={handleChange}
          checked={selected === i + 1}
        />
        <label htmlFor={`num${i + 1}`}>{i + 1}</label>
      </li>
    ))}
  </ul>
  )
}

export default Ratings