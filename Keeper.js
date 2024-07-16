import React from 'react'
import styles from './Keeper.module.css';
const Keeper = (props) => {
 return (
  <div className={styles.note}>
   <h2>{props.title}</h2>
   <p>{props.content}</p>
  </div>
 );
}

export default Keeper