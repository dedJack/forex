import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom';

const Login = () => {

  const [inVal, setInVal] = useState({
    email: "",
    password: ""
  })

  const history = useNavigate();
  //onChange function...
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
    const { email, password } = inVal;

    if (email === "") {
      alert("Enter your Email");
    } else if (!email.includes("@")) {
      alert("Enter a valid email");
    } else if (password === "") {
      alert("Enter a password");
    } else if (password.length < 6) {
      alert("Password must contain 6 letters")
    } else {

      const data = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }, body: JSON.stringify({ email, password })
      });

      const response = await data.json();
      console.log(response);

      if (response.status === 200) {
        localStorage.setItem("userDataToken", response.result.getToken);
        history("/");
        setInVal({ ...inVal, email: "", password: "" });
      }
      else {
        console.log("NOt found")
      }
    }
  }



  return (
    <>
      <section>
        <div className="signForm container">
          <div className="image-controller">
            <img src={require('./images/women-signup.webp')} height={'500px'} alt="" />
          </div>
          <div className='myInfo'>
            <div className="main-title">
              <h1>Login Form</h1>
            </div>
            <form className='myForm my-3'>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder='Enter your email' onChange={setVal} value={inVal.email} id="email" name="email" />
                <div className="form-text text-white">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder='password' onChange={setVal} value={inVal.password} name="password" id="password" />
              </div>
              <div className="text-center">
                  <button type="submit" className="signupBtn btn btn-primary m-2" onClick={handleSubmit}> Submit</button>
                </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
