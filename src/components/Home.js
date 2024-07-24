import React, { useContext, useState } from 'react'
import Enroll from "./Enroll";
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
                  <div className="col-md-3 m-2 p-2 rounded"
                    key={index}
                    style={{
                      width: "17.5rem",
                      backgroundColor: "lavender",
                    }}>
                    <div className="p-2 rounded" >
                      <div className="card-body" >

                        <div className="d-flex">
                          <p className="card-text ">{review.email}</p>
                        </div>
                        <p className="card-text m-0"><small className="text-body-secondary">{review.createdAt}</small></p>
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
      <section className='section'>
        <div className='bothContainer'>
          <h1 className='text-center mt-4 text-decoration-underline' >CONTACTS</h1>
          <div className='container' id='contacts'>
            <div className='contactForm'>
              <form className='myForm my-3'>
                <div className="name mb-3">
                  <input type="text" placeholder='Name' id="name" name="name" />
                </div>
                <div className="email mb-3">
                  <input type="email" placeholder='Email' id="email" name="email" />
                </div>
                <div className="phone mb-3">
                  <input type="number" placeholder='Phone' name="phone" id="phone" />
                </div>
                <div className="send mb-3">
                  <button type="submit" > Send</button>
                </div>
              </form>
            </div>
            <div className='detailFrom'>
              <div><b>Shubham Institute for Market Research</b></div>
              <br />
              <p><b>Address: </b>G-1 Ground Floor, Plot no. 38/246, near Durga Pandal, Hemu Nagar, Bilaspur, Chhattisgarh 495001</p>
              <div>
                <Link to='mailto:caman4672@gmail.com' className='companyEmail'><b>Email: </b>caman4672@gmail.com</Link>
                <p className='fs-3'><b>Contact for Career Opportunities</b></p>
                <p>To Team Up With Forex Institute</p>
                <Link to='mailto:caman4672@gmail.com' className='companyEmail'><b>Email: </b>caman4672@gmail.com</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='container disclaimer'>
        <h4 className='text-center text-decoration-underline mb-4'>“Disclaimer”</h4>
        <p>Investing/Trading in stock market is subject to market risks and there is no assurance or guarantee of returns – neither the principal nor the appreciation of the investments. The content/Education Provided by institute or the mentors or their assigns is solely for general interest, educational purposes & reader’s information. All participants are requested to seek independent and expert opinions before acting on anything mentioned in this course/program. We are not liable or responsible for any decision taken by the participant solely based on the information provided here. All information/views/opinions in the course/program are our interpretation and we cannot be held responsible for any miscommunication, misinformation or any action taken by an individual or group based on the course/program. By enrolling and accessing the program/course, you accept the “Disclaimer”, without limitation or qualification. On viewing this disclaimer, you understand and acknowledge that there is a very high degree of risk involved if the information is misinterpreted. As stipulated by law, the institute cannot and does not make any guarantees about your ability to get results or earn any money with ideas, information, tools, or strategies from the course/ program. The participant should know that all the ideas, information, tools, or strategies shared during the course/program are for educational and informational purpose only. Shubham Institute For Market Research , Manish Shubham and his team are neither responsible nor liable for any losses resulting from the investments. You alone are responsible and accountable for your decisions, actions, and results in life, and by your registration here you agree not to attempt to hold us liable for your decisions, actions, or results, at any time, and under any circumstance.</p>
      </footer>
    </div>
  )
}

export default Home
