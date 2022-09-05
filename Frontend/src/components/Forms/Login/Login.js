import React,{useState,useContext} from 'react'
import styles from './Login.module.css'
import { GlobalContext } from '../../../context'


const Login = () => {
 const {loginHandler,onchangeHandler,input} =useContext(GlobalContext)
   
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}></div>
      <form onSubmit={loginHandler}>
        <h2>User Login</h2>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Please enter your email address"
            name="email"
            value={input.email}
            onChange={onchangeHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Please enter your Password"
            name="password"
            value={input.password}
            onChange={onchangeHandler}
          />
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" />
          <p>
            By creating an account you agree to terms of use and our privacy
            policy
          </p>
        </div>
        <div>
          <button type='submit'>Create an account</button>
        </div>
      </form>
    </div>
  )
}

export default Login