import React from 'react'

const ReviewItem = () => {
    const object = [
        {
            id: 1,
            name: "Aman Choudhary",
            review: "NOT GOOD"
        },
        {
            id: 2,
            name: "Maynk vaIdya",
            review: "You are good boy"
        },
        {
            id: 3,
            name: "Shubham Sahu",
            review: " boy"
        }
    ]
    // let {id, name,review} = props    
    return (
        <div>
            {
                object.map((user, id) => (

                    <div className=" d-flex  mt-4" key={id}>
                        <div className="card mb-3 mx-4" style={{ width: "18rem", height: "10rem" }}>
                            <div className="card-body rounded" >
                                <h5 className="card-title">{user.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{user.id}</h6>
                                <p className="card-text m-0">{user.review}</p>
                                {/* <Link to="#" className="card-link">see more</Link> */}
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default ReviewItem
