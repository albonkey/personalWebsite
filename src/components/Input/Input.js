import React from 'react';
import './Input.css';

const Input = ({name, type, text, setValue, value, required, step}) => {
  return(
    <div className='input-box'>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} id={name} required={required} onChange={(e) => setValue(e.target.value)} step={step} value={value}></input>
    </div>
  )
}

export default Input;
