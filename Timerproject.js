import React from 'react'
import { useState } from 'react';
import styles from './Timerproject.module.css';
const Timerproject = () => {
   setInterval(displaytime, 1000); 
  let now=new Date().toLocaleTimeString();
 const [time,setTime]=useState(now)
  function displaytime(){
    const newTime=new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div style={styles.decoration}> 
      <h1 id="time">{time}</h1>
    </div>
  )
}

export default Timerproject
