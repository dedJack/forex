import React from 'react'
import './Enroll.css'

const enroll = () => {
  return (
    <div>
      <div className='enroll my-2 '>
        <button type="button" className="badge btn btn-primary" data-bs-toggle="modal" data-bs-target="#enquiryForm">
          Enroll
        </button><span> REGISTER FOR FREE 1-1 APPOINTMENT </span>

        <div className="modal fade" id="enquiryForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content bg-secondary">
              <div className="modal-header ">
                <h1 className="modal-title fs-3 " id="exampleModalLabel">Enquiry Forum</h1>
                <button type="button " className="btn-close fs-4" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body ">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name:</label>
                    <input type="text" className="form-control" id="name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">Contact Number:</label>
                    <input type="number" className="form-control" id="contactNumber" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                  </div>
                    <label htmlFor="email" className="form-label">Your Enquiry:</label>
                  <div className="input-group input-group-sm mb-3">
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="m-auto">
                <button type="button" className="btn btn-primary">Submit</button>
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

export default enroll
