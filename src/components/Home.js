import React, { useEffect } from 'react'
import './Home.css'
import Enroll from "./Enroll";
import { useNavigate, Link } from 'react-router-dom';


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
      <div className="container " >
        <h2 className='text-center text-decoration-underline'>YOUR REVIEWS</h2>
      </div>

      <div className=" d-flex  mt-4">
        <div className="card mb-3 mx-4" style={{ width: "18rem", height: "10rem" }}>
          <div className="card-body rounded" >
            <h5 className="card-title">Aman choudhary</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">On 3rd April 2024</h6>
            <p className="card-text m-0">This helps me to understand the market </p>
            
            <Link to="#" className="card-link">see more</Link>
          </div>
        </div><div className="card mb-3 mx-4" style={{ width: "18rem", height: "10rem" }}>
          <div className="card-body rounded" >
            <h5 className="card-title">Aman choudhary</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">On 3rd April 2024</h6>
            <p className="card-text m-0">This helps me to understand the market </p>
            <Link to="#" className="card-link">see more</Link>
          </div>
        </div><div className="card mb-3 mx-4" style={{ width: "18rem", height: "10rem" }}>
          <div className="card-body rounded" >
            <h5 className="card-title">Aman choudhary</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">On 3rd April 2024</h6>
            <p className="card-text m-0">This helps me to understand the market </p>
            <Link to="#" className="card-link">see more</Link>
          </div>
        </div>
        <Link to="#" className="fs-3 align-content-center">see more</Link>
      </div>




    </div>
  )
}

export default Home
