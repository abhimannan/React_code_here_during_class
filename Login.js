import React from 'react'
import styles from './Login.module.css'
const Login = () => {

  return (
    <div className={styles.container}>
      <form>
          <input type="text" placeholder="Username" /><br></br>
          <input type="text" placeholder="Password" /><br></br>
          <button type="submit">Login</button>
          
        </form>
    </div>
  )
}

export default Login
