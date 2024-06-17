import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Signup.css"

const Signup = () => {

  const [inVal, setInVal] = useState({
    name: '',
    email: '',
    password: ''
  })

  const history = useNavigate();

  const setVal = (e) => {
    const { name, value } = e.target;

    setInVal(() => {
      return {
        ...inVal, [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = inVal;

    if (name === '') {
      alert('Enter Your name');
    } else if (email === '') {
      alert('Enter a valid Email');
    } else if (!email.includes("@")) {
      alert('Enter a valid Email');
    } else if (password === '') {
      alert('Enter your password');
    } else if (password.length < 6) {
      alert('Enter your password');
    } else {
      // console.log('Registration succesfully done');

      const data = await fetch('/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const response = await data.json();
      console.log(response);

      if (response.status === 200) {
        alert('User register successfull...');
        history("/login");
        setInVal({ ...inVal, name: "", email: "", password: "" });
      }

    }
  }

  return (
    <>
      <section>
        <main>
          <div className="signForm container grid grid-two-cols">
            <div className="image-controller">
              <img src={require('./images/women-signup.webp')} height={'500px'} alt="SignUp Image" />
            </div>
            <div className="myInfo">
              <div className="main-title">
                <h1>Registration Form</h1>
              </div>
              <form className='myForm my-3'>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Enter Your Name:</label>
                  <input type="name" className=" form-control" placeholder='Enter your name' onChange={setVal} value={inVal.name} id="name" name="name" />
                </div>
                <div className="mb-4" >
                  <label htmlFor="email" className="form-label">Email address:</label>
                  <input type="email" className=" form-control" placeholder='Enter your Email' onChange={setVal} value={inVal.email} id="email" name="email"  />
                  <p className="form-text " style={{ color: "whitesmoke", fontWeight: "lighter" }}>We'll never share your email with anyone else.</p>
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Enter Your Password:</label>
                  <input type="password" className=" form-control" placeholder='password' onChange={setVal} value={inVal.password} name="password" id="password" />
                </div>
                <div className="text-center">
                  <button type="submit" className="signupBtn btn btn-primary " onClick={handleSubmit}> Submit</button>
                </div>
              </form>
              <div className="form-text text-white text-center">Already have an account. <a href='./Login'>Login</a></div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Signup

