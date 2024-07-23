import React from 'react'

const page = () => {
    return (
        <>
            <h2 className="mb-5">Create New Account</h2>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input type="text" className="form-control" name="firstname" id="firstname" placeholder='Type In Your First Name' />
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input type="text" className="form-control" name="lastname" id="firstname" placeholder='Type In Your Last Name' />
            </div>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">Date OF Birth</label>
                <input type="date" className="form-control" name="firstname" id="firstname" placeholder='Type IN Your First Name' />
            </div>
            <div className="mb-3">
                <label htmlFor="gender" className="form-label d-block">Gender</label>
                <div className="form-check form-check-inline">
                    <label htmlFor="male" className='form-check-label'>Male</label>
                    <input type="radio" className="form-check-input w-0 form-control" name="gender" id="gender" value="male" />
                </div>
                <div className="form-check form-check-inline">
                    <label htmlFor="female" className='form-check-label'>Female</label>
                    <input type="radio" className="form-check-input w-0 form-control" name="gender" id="gender" value="female" />
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-5 w-md-50 w-sm-75 p-2 mx-sm-5 mx-auto d-block">Create New Account</button>
        </>
    )
}

export default page