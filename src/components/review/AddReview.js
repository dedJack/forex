import React, { useContext, useState, useEffect } from 'react'
import noteContext from '../../context/noteContext'

const AddReview = () => {
  const context = useContext(noteContext);
  const { user, addReview, getReview} = context;

  useEffect(() => {
    getReview();
    // eslint-disable-next-line
  }, []);

  const [review, setReview] = useState({ name: "", description: "" });
  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setReview({ name: user.name, description: "",createdAt:"" });
    setUserData(false);
  }

  //Checking the form before submitting
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description } = review;
    if (name === '') {
      alert("Enter a valid name")
    }
    else if (name.length<6) {
      alert("Name must be atleast 6 characters")
    } else if (description === '') {
      alert("Description must be written")
    } else if (description.length < 5) {
      alert("Description must be alteast 5 characters.")
    }
    else {
      addReview(user.name, review.description)
      setReview({ name: user.name, description: ""})
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
            <label htmlFor="name" className="form-label">Name :</label>
            <input type="name" disabled className="form-control" name="text" id="name" value={review.name} onChange={onChange}  />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description :</label>
            <textarea className="form-control" name="description" id="description" onChange={onChange} value={review.description} rows="5" col ="20" aria-label="With textarea" ></textarea>
          </div>
          <button type="submit" className="reviewBtn btn btn-primary" >Submit</button>
        </form>
      </div>
    </section>
  )
}

export default AddReview
