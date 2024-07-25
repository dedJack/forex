import React, { useContext, useState } from 'react'
import Enroll from "./Enroll";
import Contacts from './Contacts';
import AddReview from './review/AddReview';
import noteContext from '../context/noteContext'
import { Link } from 'react-router-dom';


const Home = () => {

  const context = useContext(noteContext);
  const { reviews } = context;
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  //convert standard date and time to string 
  const formatDate=(dateString)=>{
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2,'0');
    const month = String(date.getMonth()+1).padStart(2,'0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return (

    <div >
      <div className="image">
        <img src={require('./images//warren_buffet.webp')} alt="" />
        <div className="quote">Without <b>Passion</b> you dont have energy <br />Without energy you have <b>nothing</b></div>
      </div>
      <div>
        <Enroll />
      </div>
      <section className='section'>
        <main>
          <div className="container">
            <h2 className='text-center text-decoration-underline'>YOUR REVIEWS</h2>
          </div>
          <AddReview />
          <div className="reviewCard ">
            <div className="row m-2">
              {reviews.map((review, index) => {
                return (
                  <div className="cardItem col-md-3 m-2 p-2 rounded"
                    key={index}>
                    <div className="p-2 rounded " >
                      <div className="card-body"  >
                        <div className="d-flex">
                          <p className="card-text ">{review.name}</p>
                        </div>
                        <p className="card-text m-0"><small className="reviewDate">{formatDate(review.createdAt)}</small></p>
                        <p className="card-text m-1">{isExpanded ? review.notes : review.notes.length > 150 ? review.notes.slice(0, 150) + "..." : review.notes}<br /> </p>
                        {review.notes.length > 150 && (
                          <button onClick={toggleExpand} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', padding: '0 4px' }}>
                            {isExpanded ? 'Read Less' : 'Read More'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              }).slice(0, 4)
              }
              {reviews.length >= 5 && <div className="moreLinks col-md-3 m-2 p-2 rounded">
                <div className=" rounded" style={{ height: "9rem", display: "flex", alignItems: 'center' }}>
                  <div className="card-body fs-2 text-center" >
                    <Link to="/ReviewItem" style={{ textDecoration: 'none', color: 'black' }} >See more
                      <p className='disclaimer text-center'>Tap to see more reviews</p>
                    </Link>
                  </div>
                </div>
              </div>}
            </div>
          </div>
        </main>
      </section>

      <picture className="image">
        <img src={require('./images//warren_buffet.webp')} alt="" style={{marginTop: "10px"}}/>
      </picture>
      <Contacts/>
    </div>
  )
}

export default Home
