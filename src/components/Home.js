import React from 'react'
import './Home.css'
import Enroll from "./Enroll";


const Home = () => {
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
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control bg-secondary text-white" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Enter Your reviews</label>
          <textarea className="form-control bg-secondary text-white" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div><div className="container text-center ">
        <button type="button" className="btn btn-primary mb-2">Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Home
