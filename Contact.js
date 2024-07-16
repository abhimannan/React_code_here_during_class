import React from 'react'
import styles from './Contact.module.css'
const Contact = (props) => {
  
  
  return (
    <div className={styles.container}>
      <h2 className={styles.tag}>{props.name}</h2>
      <h2 className={styles.tag}>{props.mother}</h2>
    </div>
  )
}

export default Contact
