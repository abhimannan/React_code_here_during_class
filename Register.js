import React, { useState } from 'react';
import styles from './Login.module.css';

const Register = () => {
  const [prepassword, setPrepassword] = useState('');
  const [confpassword, setConfpassword] = useState('');
  const [message, setMessage] = useState('');

  const checkPassword = (e) => {
    e.preventDefault();
    if (prepassword === confpassword) {
      setMessage('Password is correct');
    } else {
      setMessage('Password is not correct');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={checkPassword}>
        <input type="text" placeholder="Username" /><br />
        <input
          className='val1'
          type="password"
          placeholder="Password"
          value={prepassword}
          onChange={(e) => setPrepassword(e.target.value)}
        /><br />
        <input
          className='val2'
          type="password"
          placeholder="Confirm Password"
          value={confpassword}
          onChange={(e) => setConfpassword(e.target.value)}
        /><br />
        <button className='btn' type="submit">Register</button>
        <h1 className='display'>{message}</h1>
      </form>
    </div>
  );
};

export default Register;
