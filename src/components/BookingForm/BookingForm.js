import React from "react";
import Header from "../Header/Header";
import styles from "./BookingForm.module.css";

const BookingForm = () => {
  return (
    <div className={styles.container}>
    <Header/>
     <h1>MY RESORT BOOKING FORM</h1>
      <div>
     
      <div className={styles.formContainer}>
        <div className={styles.imageContainer}>
           <img src="https://media.istockphoto.com/photos/drone-view-of-woman-snorkelling-in-the-maldives-picture-id1299305921?b=1&k=20&m=1299305921&s=170667a&w=0&h=mVo_49ijB244Gu7YiVXrsMqqdm1GryM5SRuIG0M_vF8=" alt="image"/> 
        </div>

        <div  className={styles.form}>
        <h2>Make Your Reservation</h2>
        <form className={styles.formAction}>
          
            <div className={styles.checkInContainer}>
              <div>
                <label htmlFor="checkin">CHECKIN</label>
                <input type="date" />
              </div>
              <div>
                <label htmlFor="checkOut">CHECKOUT</label>
                <input type="date" />
              </div>
            </div>
            <div className={styles.peopleContainer}>
               <div>
               <label htmlFor="checkOut">ADULT</label>
                <input type="number" />
               </div> 
               <div>
               <label htmlFor="checkOut">CHILDREN</label>
                <input type="number" />
               </div>
            </div>
            <div className={styles.emailContainer}>
            <label htmlFor="email">EMAIL</label>
                <input type="email" placeholder="Enter your email"/>
            </div>
            <div className={styles.emailContainer}>
            <label htmlFor="PhoneNumber">PHONE NUMBER</label>
                <input type="text"  placeholder="enter your phone number"/>
            </div>
            <div className={styles.btn}>
            <input type="btn" value='Book Now'/>
            </div>
          </form>
        
        </div>
          
      </div>
      </div>
    </div>
  );
};

export default BookingForm;
