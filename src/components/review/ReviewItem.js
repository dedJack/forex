import React, { useContext } from 'react'
import noteContext from '../../context/noteContext'

const ReviewItem = (props) => {

    const context = useContext(noteContext);
    const { reviews, addReview,} = context;
    return (
        <div>
        <div className="container" >
        <div className="col">
            {reviews.map((review,key) => {
                return (
                    <div className="col m-2 p-2 rounded"
                        key={review._id}
                        style={{
                            // width: "16.5rem",
                            backgroundColor: "lavender",
                        }}>
                        <div className="p-2 rounded" style={{ height: "6rem" }}>
                            <div className="card-body">
                                <div className="d-flex">
                                <h5 className="card-title "><b>{review.email}</b></h5>
                                {/* <i class="fa-solid fa-trash fa-sm mx-4 "></i> */}
                                </div>
                                <p className="card-text m-0"><small className="text-body-secondary">27 May 2024</small></p>
                                <p className="card-text" style={{ height: "50px" }} >{review.notes}</p>
                                
                                {/* <Link rel="noreferrer" to="" target='_blank' className="btn btn-sm btn-dark">Read more</Link> */}
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
