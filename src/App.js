import React, { useState } from 'react'
import './App.css'
import data from './data';

const App = () => {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(count);
    let amount = parseInt(count);
    if(count <= 0){
      amount = 1;
    }
    if(count > 8){
     amount = 8;
    }
    setText(data.slice(0, amount));
  }

  const handleChange = (e) => {
    setCount(e.target.value);
  }

  return (
    <div className='App'>
      <h1>Generate Lorem Ipsum Paragraphs</h1>
      <h3>Enter the number of paragraphs you want to get</h3>
      <form action="" onSubmit={handleClick}>
      <label htmlFor="lorem-ipsum">Paragraph : </label>
      <input 
        type="number" 
        name='lorem-ipsum' 
        id='lorem-ipsum'
        value = {count}
        onChange={handleChange}
        />
        <button type='submit'>Submit</button>
    </form>
    <article>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </article>
    </div>
  )
}

export default App
