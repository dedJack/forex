import React, { useContext } from 'react'
import noteContext from '../../context/noteContext'

const ReviewItem = (props) => {

    const context = useContext(noteContext);
    const { reviews} = context;
    return (
        <div>
        <div className="container" >
        <div className="col">
            {reviews.map((review, key) => {
                return (
                    <div className="col m-2 p-2 rounded"
                        style={{
                            backgroundColor: "lavender",
                        }}>
                        <div className="p-2 rounded"  style={{ height: "6rem" }}>
                            <div className="card-body" key={review._id}>
                                <div className="d-flex">
                                <p className="card-text fs-6 text-body-secondary">{review.email}</p>
                                </div>
                                <p className="card-text m-0"><small className="text-body-secondary">27 May 2024</small></p>
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
