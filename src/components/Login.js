import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const [inVal, setInVal] = useState({
    email: "",
    password: ""
  })

  const history = useNavigate();
  //onChange function...
  const setVal = (e) =>{
    const {name, value} = e.target;

    setInVal(()=>{
      return{
        ...inVal, [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password} = inVal;

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

      if(response.status === 200){
        localStorage.setItem("userDataToken",response.result.getToken);
        history("/");
        setInVal({...inVal, email: "", password:""});
      }
    }
  }

  return (
    <div>
      <form className='container w-50 my-3'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" onChange={setVal} value= {inVal.email} id="email" name="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={setVal} value={inVal.password} name="password" id="password" />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}> Submit</button>
      </form>
    </div>
  )
}

export default Login
