import React, { useContext } from 'react'
import noteContext from '../../context/noteContext'

const ReviewItem = (props) => {

    const context = useContext(noteContext);
    const { reviews, addReview} = context;
    return (
        <div>
        <div className="container" >
        <div className="row">
            {reviews.map((review) => {
                return (
                    <div className="col-md-3 m-2 p-2 rounded"
                        style={{
                            width: "16.5rem",
                            backgroundColor: "lavender",
                        }}>
                        <div className="p-2 rounded" style={{ height: "8rem" }}>
                            <div className="card-body">
                                <h5 className="card-title"><b>{review._id}</b></h5>
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
