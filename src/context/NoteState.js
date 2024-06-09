import React, { useState } from "react";
import NoteContext from "./noteContext";
import { json } from "react-router-dom";

const NoteState = (props) => {
  const reviewsInitial = []


  //getAllReview
  const getReview = async() =>{
    //API call
    const response = await fetch(`/fetchAllReview`,{
      method: 'GET',
      headers:{
        "Content-Type" : 'application/json'
      }
    })
    const data = await response.json();
    // console.log(data);
    setReviews(data)
  }

  //addReview
  const addReview = (email,notes) => {
    console.log("Adding a new note");
    const review={
      "_id": "66536b31d2888a6d267837456",
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
    <NoteContext.Provider value={{ reviews, addReview, deleteReview, getReview }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;