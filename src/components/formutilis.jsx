import React from 'react'

function formutilis({title}) {
    return (
        <React.Fragment>
            <div className="container mt-5">

                <div className="mb-3">
                    <h1>{title}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className='btn btn-primary'>Uppercase</button>
            </div>
        </React.Fragment>
    )
}

export default formutilis
