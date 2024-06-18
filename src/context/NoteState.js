import React, { useState, useEffect } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  //User Authentication
  
  const [user, setUser] = useState("");

  const DashboardValid = async () => {
    //token get from localstorage which is stored. reference-- 'login.js'
    let token = localStorage.getItem("userDataToken");

    const data = await fetch("/getUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      }
    });
    const response = await data.json();
    // console.log(response.user);
    setUser(response.user);
  }

  // eslint-disable-next-line
  useEffect(() => {
    DashboardValid();
  }, [])
  

//User Logged out..
  const logoutUser = async()=>{
    
    let token = localStorage.getItem("userDataToken");
  
      const data = await fetch("/logoutUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
          accept: "application/json"
        },
        credentials:"include"
      });
      const response = await data.json();
      console.log(response);
      if(response.status!==200){
        localStorage.removeItem("userDataToken")
        setUser(false);
      }
  }
  /*-----------------------------------------------------------------------------------------*/
  //Review Controller

  const reviewsInitial = []

  //getAllReview
  const getReview = async () => {
    //API call
    const response = await fetch(`/fetchAllReview`, {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json'
      }
    })
    const data = await response.json();
    // console.log(data);
    setReviews(data)
  }

  //addReview
  const addReview = async (email, notes) => {
    //API call
    const response = await fetch('/addReview', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      }, body: JSON.stringify({ email, notes })
    });

    const data = await response.json();
    console.log(data);
    console.log("Adding a new note");
    const review = {
      "email": email,
      "notes": notes,
      "__v": 0
    };
    setReviews(reviews.concat(review));
  }

  //deleteReview
  const deleteReview = () => {

  }

  const [reviews, setReviews] = useState(reviewsInitial)
  return (
    <NoteContext.Provider value={{ user, reviews, addReview, deleteReview, getReview ,logoutUser}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;