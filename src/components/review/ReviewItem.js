import React, { useContext } from 'react'
import noteContext from '../../context/noteContext'

const ReviewItem = () => {

    const context = useContext(noteContext);
    const { reviews} = context;
   
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
                                <p className="card-text m-0"><small className="text-body-secondary">10 jul 2024</small></p>
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
