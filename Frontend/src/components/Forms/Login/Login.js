import React,{useContext} from 'react'
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
            name="email"
            value={input.email}
            onChange={onchangeHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
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
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login