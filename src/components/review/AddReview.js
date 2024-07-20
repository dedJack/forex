import React, { useContext, useState, useEffect } from 'react'
import noteContext from '../../context/noteContext'

const AddReview = () => {
  const context = useContext(noteContext);
  const { user, addReview, getReview } = context;

  useEffect(() => {
    getReview();
    // eslint-disable-next-line
  }, []);

  const [review, setReview] = useState({ email: "", description: "" });
  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setReview({ email: user.email, description: "" });
    setUserData(false);
  }

  //Checking the form before submitting
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, description } = review;
    if (email === '') {
      alert("Enter a valid email")
    }
    else if (!email.includes("@")) {
      alert("Enter a valid email")
    } else if (description === '') {
      alert("Description must be written")
    } else if (description.length < 5) {
      alert("Description must be alteast 5 characters.")
    }
    else {
      addReview(user.email, review.description)
      setReview({ email: user.email, description: "" })
    }
  }

  //Changing the values
  const onChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value })
  }

  return (
    <section className='container'>
      <div className=' reviewForm'>
        <form  onSubmit={handleSubmit} id='reviewCard' style={{ display: user ? "block" : "none" }} >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" disabled className="form-control" name="email" id="email" value={review.email} onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" name="description" id="description" onChange={onChange} value={review.description} rows="5" col ="20" aria-label="With textarea" ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
      </div>
    </section>
  )
}

export default AddReview
