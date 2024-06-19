import React, { useState, useContext } from 'react'
import noteContext from '../context/noteContext'

const Enroll = () => {

  const context = useContext(noteContext);
  const{user} = context;

  const [userData, setUserData] = useState(true);
  const [inForm, setInForm] = useState({
    name:"",
    contactNumber:"",
    email:"",
    enquiry:""
  })
  if(userData && user){
    setInForm({
      name:"",
      contactNumber:"",
      email:user.email,
      enquiry:""
    })
    setUserData(false);
  }
  const onChange =(e)=>{
    const { name, value} = e.target;

    setInForm(()=>{
      return{
        ...inForm,[name]:value
      }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {name, contactNumber,email,enquiry} = inForm;

    const data = await fetch('/addEnquiry',{
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify({name , contactNumber, email, enquiry})
    });

    const response = await data.json();
    console.log(response)

    if(response.status === 200){
      console.log("Successfull enquiry");
      setInForm({
        name:"",
        contactNumber:"",
        email:"",
        enquiry:""})
      }
  }


  return (
    <div>
      <div className='enroll my-2 '>
        <button type="button" className="badge btn btn-primary" data-bs-toggle="modal" data-bs-target="#enquiryForm">
          Enroll
        </button><span > REGISTER FOR FREE 1-1 APPOINTMENT </span>

        <div className="modal fade" id="enquiryForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content bg-secondary">
              <div className="modal-header ">
                <h1 className="modal-title fs-2 " id="exampleModalLabel">Enquiry Forum</h1>
                <button type="button " className="btn-close fs-4" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body ">
                <form >
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name:</label>
                    <input type="text" className="form-control" onChange={onChange} value={inForm.name} name="name" id="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
                    <input type="number" className="form-control" onChange={onChange} value={inForm.contactNumber} name="contactNumber" id="contactNumber" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" onChange={onChange} value={inForm.email} name="email" id="email" aria-describedby="emailHelp" />
                  </div>
                    <label htmlFor="email" className="form-label">Your Enquiry:</label>
                  <div className="input-group input-group-sm mb-3">
                    <input type="text" className="form-control" onChange={onChange} value={inForm.enquiry} name="enquiry" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="m-auto">
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // eslint-disable-next-line */}
      <marquee className="info">IMPORTANT INFORMATION THROUGH ADMIN PANEL</marquee>
    </div>
  )
}

export default Enroll
