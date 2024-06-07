import React, { useEffect, useState } from 'react'
import './Home.css'
import Enroll from "./Enroll";
import ReviewItem from './review/ReviewItem';
import { useNavigate} from 'react-router-dom';
import AddReview from './review/AddReview';


const Home = () => {

  const history = useNavigate();

  const DashboardValid = async () => {
    //token get from localstorage which is stored. reference-- 'login.js'
    let token = localStorage.getItem("userDataToken");

    const data = await fetch("/getUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      }
    });
    const response = await data.json();
    // console.log(response);

    if (response.status !== 200 || !response) {
      console.log("error page");
      history("*");
    }
    else {
      console.log("user verify");
      history("/");
    }
  }

  useEffect(() => {
    DashboardValid();
  }, [])



  return (
    <div >
      <div className="image">
        <img src={require('./images//warren_buffet.webp')} alt="" />
        <div className="quote">Without <b>Passion</b> you dont have energy <br />Without energy you have <b>nothing</b></div>
      </div>
      <div>
        <Enroll />
      </div>
      <div className="container">
        <h2 className='text-center text-decoration-underline'>YOUR REVIEWS</h2>
      </div>
      <AddReview />      
      <ReviewItem />
    </div>
  )
}

export default Home
