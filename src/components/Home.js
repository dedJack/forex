import React, { useContext } from 'react'
import './Home.css'
import Enroll from "./Enroll";
import AddReview from './review/AddReview';
import noteContext from '../context/noteContext'
import { Link } from 'react-router-dom';


const Home = () => {

  const context = useContext(noteContext);
  const { reviews } = context;

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
          {reviews.map((review) => {
            return (
              <div className="col-md-3 m-2 p-2 rounded"
                key={review._id}
                style={{
                  width: "16.5rem",
                  backgroundColor: "lavender",
                }}>
                <div className="p-2 rounded" style={{ height: "9rem" }}>
                  <div className="card-body" >
                    <div className="d-flex">
                      <p className="card-text ">{review.email}</p>
                    </div>
                    <p className="card-text m-0"><small className="text-body-secondary">27 May 2024</small></p>
                    <p className="card-text" style={{ height: "50px" }} >{review.notes}</p>
                  </div>
                </div>
              </div>
            )
          }).slice(0, 3)
          }
          {reviews.length>=4 && <div className="col-md-3 m-2 p-2 rounded"
            style={{
              width: "16.5rem",
              backgroundColor: "lavender",
            }}>
            <div className=" rounded" style={{ height: "9rem", display: "flex", alignItems: 'center' }}>
              <div className="card-body fs-2 text-center" >
                <Link to="/ReviewItem" >See more</Link>
              </div>
            </div>
          </div>}          
        </div>
      </div>
    </div>
  )
}

export default Home
