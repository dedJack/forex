import React, { useEffect, useState } from 'react'

const AdminEnquiry = () => {

  const [enquiry, setEnquiry] = useState([]);

  const getAllEnquiry = async () => {
    try {
      console.log("HIii")
      // let token = localStorage.getItem("userDataToken");
      // const data = await fetch("/getAllUserEnquiry", {
      //   method: "GET",
      //   headers: {
      //     "auth-token": token
      //   },
      // });
      // const response = await data.json();
      // // console.log(response);
      // setEnquiry(response)
    } catch (error) {
      console.log("fetching enquiry details errro");
    }
  }

  useEffect(() => {
    getAllEnquiry();
  }, []);
  return (
    <>
    <section className='container'>
      <div className='adminTitle text-center'>
        <h2>Enquiry Details</h2>
      </div>
      <div className="container users-info ">
        <table className='table-content'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {enquiry.map((enquiry, index) => {
              return (
                <tr key={index}>
                  <td>{enquiry.name}</td>
                  <td>{enquiry.contactNumber}</td>
                  <td>{enquiry.email}</td>
                  <td> <button className="admin-btn ">Edit</button>  </td>
                  <td> <button className="admin-btn ">Delete</button>  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
      </section>

    </>
  )
}

export default AdminEnquiry
