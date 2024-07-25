import React, { useContext } from 'react'
import noteContext from '../../context/noteContext'

const ReviewItem = () => {

    const context = useContext(noteContext);
    const { reviews } = context;
   
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2,'0');
        const month = String(date.getMonth()+1).padStart(2,'0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
    return (
        <div>
        <div className="container" >
        <div className="row m-2">
            {reviews.map((review, index) => {
                return (
                    <div className="cardItem col-md-3 m-2 p-2 rounded"
                    key={index}>
                        <div className="p-2 rounded">
                            <div className="card-body" >
                                <div className="d-flex">
                                <p className="card-text ">{review.name}</p>
                                </div>
                                <p className="card-text m-0"><small className="reviewDate">{formatDate(review.createdAt)}</small></p>
                                <p className="card-text"  >{review.notes}</p>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
        </div>
        </div>
    )
}

export default ReviewItem
