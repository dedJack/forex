import React, { useEffect } from 'react'
import './Home.css'
import Enroll from "./Enroll";


const Home = () => {

  const DashboardValid = async()=>{
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
    console.log(response);
  }

  useEffect(() => {
        DashboardValid();

})

  return (
    <div >
      <div className="image">
        <img src={require('./images//warren_buffet.webp')} alt="" />
        <div className="quote">Without <b>Passion</b> you dont have energy <br />Without energy you have <b>nothing</b></div>
      </div>
      <div>
        <Enroll />
      </div>
      <div className="container ">
        <h2 className='text-center text-decoration-underline'>YOUR REVIEWS</h2>
        <div className=" mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control bg-secondary text-white" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your reviews</label>
          <textarea className="form-control bg-secondary text-white" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div><div className="container text-center ">
        <button type="button" className="btn btn-primary mb-2">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Home
