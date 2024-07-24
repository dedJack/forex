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
        <div className="col">
            {reviews.map((review, index) => {
                return (
                    <div className="col m-2 p-2 rounded"
                    key={index}
                        style={{
                            backgroundColor: "lavender",
                        }}>
                        <div className="p-2 rounded">
                            <div className="card-body" >
                                <div className="d-flex">
                                <p className="card-text fs-6 text-body-secondary">{review.email}</p>
                                </div>
                                <p className="card-text m-0"><small className="text-body-secondary">{formatDate(review.createdAt)}</small></p>
                                <p className="card-text" style={{ height: "50px" }} >{review.notes}</p>
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
