import React, { useEffect, useState} from 'react'

const AdminReview = () => {

  const [review, setReview] = useState([]);

  const getAllReview = async () => {
    try {
      // console.log("HIii")
      let token = localStorage.getItem("userDataToken");
      const data = await fetch("/getAllUserReviews", {
        method: "GET",
        headers: {
          "auth-token": token
        },
      });
      const response = await data.json();
      // console.log(response);
      setReview(response)
    } catch (error) {
      console.log("fetching reviews details errro");
    }
  }

  useEffect(() => {
    getAllReview();
  }, []);
  return (
    <>
    <section className='container'>
      <div className='adminTitle text-center'>
        <h2>Reviews Details</h2>
      </div>
      <div className="container users-info ">
        <table className='table-content'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Reviews</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {review.map((review, index) => {
              return (
                <tr key={index}>
                  <td>{review.email}</td>
                  <td className='notes'>{review.notes}</td>
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

export default AdminReview
