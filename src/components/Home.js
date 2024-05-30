import React, { useEffect, useState } from 'react'
import './Home.css'
import Enroll from "./Enroll";
import ReviewItem from './ReviewItem';
import { useNavigate} from 'react-router-dom';


const Home = () => {

  const history = useNavigate();
  const [showReview, setShowReview] = useState(false);

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

  const handleReviewButtonClick = () => {
    setShowReview(true);
  };

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
        <h2 className='text-center text-decoration-underline' onClick={handleReviewButtonClick}>YOUR REVIEWS</h2>
      </div>
      {showReview && (
        <form className='container' id='reviewCard'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="input-group mb-3">
            <textarea class="form-control" aria-label="With textarea"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
      <ReviewItem />
    </div>
  )
}

export default Home
