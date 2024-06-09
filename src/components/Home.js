import React, { useContext, useEffect } from 'react'
import './Home.css'
import Enroll from "./Enroll";
import { useNavigate} from 'react-router-dom';
import AddReview from './review/AddReview';
import noteContext from '../context/noteContext'
import { Link } from 'react-router-dom';


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

  const context = useContext(noteContext);
  const { reviews} = context;

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
      <div className="container ">
      <div className="row">
            {reviews.map(review => {
                return (
                    <div className="col-md-3 m-2 p-2 rounded"
                        key={review._id}
                        style={{
                            width: "16.5rem",
                            backgroundColor: "lavender",
                        }}>
                        <div className="p-2 rounded" style={{ height: "9rem" }}>
                            <div className="card-body">
                                <div className="d-flex">
                                <h5 className="card-title "><b>{review.email}</b></h5>
                                {/* <i class="fa-solid fa-trash fa-sm mx-4 "></i> */}
                                </div>
                                <p className="card-text m-0"><small className="text-body-secondary">27 May 2024</small></p>
                                <p className="card-text" style={{ height: "50px" }} >{review.notes}</p>
                                
                                {/* <Link rel="noreferrer" to="" target='_blank' className="btn btn-sm btn-dark">Read more</Link> */}
                            </div>
                        </div>
                    </div>
                )
            }).slice(0,3)
          }

            <div className="col-md-3 m-2 p-2 rounded"
                        style={{
                            width: "16.5rem",
                            backgroundColor: "lavender",
                        }}>
                        <div className=" rounded" style={{ height: "9rem", display : "flex", alignItems:'center'}}>
                            <div className="card-body fs-2 text-center" >
                              <Link to= "/ReviewItem" >See more</Link>
                            </div>
                        </div>
                    </div>
        </div>  
        </div>  
      {/* <ReviewItem /> */}
    </div>
  )
}

export default Home
