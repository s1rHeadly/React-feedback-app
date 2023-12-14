import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../shared/Card';


const About = () => {
  return (
    <div className='container'>
     <Link to='/' style={{color: 'white'}}>Back to home</Link>
     <Card><p>Est amet et sit gubergren amet, et ipsum gubergren sea amet sit, amet lorem sadipscing sadipscing et dolor, justo dolor.</p></Card>
    </div>
  )
}

export default About