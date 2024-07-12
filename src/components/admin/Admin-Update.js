import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const AdminUpdate = () => {

    const [data, setData] = useState({
        name: "",
        email: ""
    })
    const params = useParams();
    const getSingleUser = async (id) => {
        try {
            const token = localStorage.getItem('userDataToken');
            const response = await fetch(`/admin/${params.id}`, {
                headers: {
                    'auth-token': token,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                //   console.log(data);
                setData(data.user);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    useEffect(() => {
        getSingleUser()
        // eslint-disable-next-line
    }, []);

    const onChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data, [name]: value
        })
    }

    // To Update user data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let token = localStorage.getItem("userDataToken");
            const response = await fetch(`/admin/update_user/${params.id}`, {
                method: "PATCH",
                headers: {
                    "auth-token": token,
                    "Content-Type": "application/json"
                }, body: JSON.stringify(data)
            })
            if(response.ok){
                const resultData = await response.json();
                console.log(resultData);
                toast.success("User updated successfully");
            }else{
                toast.error("User not updated");
            }
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    return (
        <div>
            <div className='adminTitle text-center'>
                <h2>Users Update</h2>
            </div>
            <form className='container UpdateForm' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name:</label>
                    <input type="text" className="form-control" onChange={onChange} value={data.name} name="name" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" onChange={onChange} value={data.email} name="email" id="email" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

        </div>
    )
}

export default AdminUpdate
