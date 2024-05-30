import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const reviewsInitial = [
        {
          "_id": "6653213ca25400b01ee1c7a5",
          "notes": "This is wonderefull website",
          "__v": 0
        },
        {
          "_id": "66532223b6331e3618bedee7",
          "notes": "I get soo much from this website ",
          "__v": 0
        },
        {
          "_id": "665368446d364cd337a13fff",
          "notes": "I get soo much from this website becoz iknw nothing about trading ",
          "__v": 0
        },
        {
          "_id": "6653685e6d364cd337a14002",
          "notes": "I never got such clear vision of trading",
          "__v": 0
        },
        {
          "_id": "66536b31d2888a6d26783745",
          "notes": "I never got such clear   of trading",
          "__v": 0
        }
      ]

      //addReview
      const addReview =(review)=>{
        review = null;
        setReviews(reviews.push(review));
      }
      //deleteReview
      const deleteReview =()=>{

      }

      const [reviews, setReviews] = useState(reviewsInitial)
    return(
        <NoteContext.Provider value={{reviews, addReview, deleteReview}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;