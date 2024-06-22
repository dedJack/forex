import React, { useEffect, useState } from 'react'

const AdminUsers = () => {

  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      console.log("HIii")
      let token = localStorage.getItem("userDataToken");
      const data = await fetch("/getAllUserDetails", {
        method: "GET",
        headers: {
          "auth-token": token
        },
      });
      const response = await data.json();
      // console.log(response);
      setUsers(response)
    } catch (error) {
      console.log("fetching user details errro");
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <>
    <section className='container'>
      <div className='adminTitle text-center'>
        <h2>Users Details</h2>
      </div>
      <div className="container users-info ">
        <table className='table-content'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
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

export default AdminUsers
