import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import Card from "../Card/Card";
import Chart from "../Chart/Chart";
import ImageCard from "../ImageCard/ImageCard";
import BookingList from "../BookingList/BookingList";
import NewFeatures from "../NewFeatures/NewFeatures";
import styles from "./DashBoard.module.css";
import Profile from "../Profile/Profile";
import BookingListItems from "../BookingList/BookingListItems";
import ViewAll from "../ViewAll/ViewAll";

const DashBoardLayout = () => {
  return (
    <div className={styles.container}>
      <div>
        <SideBar />
      </div>
      <div>
        <NavBar />
        <div>
          <Header />
          <div className={styles.cardContainer}>
            <div>
              <Card
                percent="4%"
                color="#FFCE76"
                booked="31"
                checkedin="19"
                backgroundColor="#F9E3A3"
              />
              <h4>Saint Denis</h4>
            </div>
            <div>
              <Card percent="6%" color='#6A7EFC' booked="8" checkedin="5" backgroundColor="#A696C8" />
              <h4>Black water</h4>
            </div>
            <div>
              <Card percent="8%" color="" booked="10" checkedin="6" backgroundColor="#F29696" />
            </div>
          </div>
          <Chart />
        </div>
        </div>
        <div className={styles.imageCardContainer}>
           <Profile/>
          <div className={styles.booklist}>
          <ImageCard />
          <BookingList />
          <BookingListItems
            img="https://media.istockphoto.com/photos/man-looking-picture-id1168966537?b=1&k=20&m=1168966537&s=170667a&w=0&h=11_v7GkTBvrMpto6iVO5oSI8VjxL5GdlraTLK_LizwM="
            guest="0 guest"
            name="Waden Warren"
            paid="Paid"
            color='#7CA0E5'
          />
          <BookingListItems
            img="https://media.istockphoto.com/photos/smiling-man-with-hat-and-sunglasses-picture-id953079238?b=1&k=20&m=953079238&s=170667a&w=0&h=nV7ep-uPYLJhRtYlHB3SCEJ1Sksd-P5o1-sZDslffJI="
            guest="3 guest"
            name="Jacob Jones"
            paid="Pending.."
            color='#F9E3A3'
          />
          <BookingListItems
            img="https://media.istockphoto.com/photos/smile-girl-at-beach-picture-id477151294?b=1&k=20&m=477151294&s=170667a&w=0&h=T3n6eYUeg26yjssHbVKhZTbB8reMcBNAWut_ut5u8yY="
            guest="5 Guest"
            name="Kathy Murphy"
            paid="Paid"
            color='#7CA0E5'
          />
          <ViewAll/>
          </div>
          <NewFeatures />
        </div>
      
    </div>
  );
};

export default DashBoardLayout;
