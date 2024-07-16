import React from 'react'
import styles from './Websitenav.module.css';
const Websitenav = (props) => {
  return (
    <div className={styles.navcontainer}>
      <div>
        <img alt="logo" src={props.imagesource}></img>
      </div>

      <a className={styles.anchortags} href="https://example.com">Features</a>
      <a className={styles.anchortags} href="https://example.com">About us</a>
      <a className={styles.anchortags} href="https://example.com">Contact Us</a>
      <a className={styles.anchortags} href="https://example.com">Support</a>
      <a className={styles.anchortags} href="https://example.com">Terms</a>
      <a className={styles.anchortags} href="https://example.com">Details</a>
      <a className={styles.anchortags} href="https://example.com">Founder</a>
      <div>
        <input className={styles.inputbox} placeholder="Search here..." type="text"></input>
        <button className={styles.Submitbox}>Submit</button>
      </div>
    </div>
  )
}

export default Websitenav
