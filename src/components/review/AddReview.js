import React, { useState } from 'react'

const AddReview = () => {
  const [review, setReview] = useState({email:"", description:""})

  const handleSubmit = ()=>{

  }

  const onChange =(e)=>{
    setReview({...review, [e.target.name]: e.target.value})
  }

  return (
    <div>
        <form className='container' id='reviewCard'>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" id="email" onChange={onChange} aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Decription</label>
            <textarea className="form-control" name="description" id="description" onChange={onChange} aria-label="With textarea"></textarea>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>

    </div>
  )
}

export default AddReview
