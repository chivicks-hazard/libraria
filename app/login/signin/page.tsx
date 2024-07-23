import { Metadata } from "next"

const metadata: Metadata = {
    title: "Sign In To Libraria",
    description: "A sign in page for Libraria",
}

const page = () => {
    return (
        <>
            <h1 className='mb-5'>Sign In Here</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder='Type your email address' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="form-control"
                        id="form-control"
                        placeholder="Type your password here"
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-5 w-50 mx-auto d-block">Sign In</button>
                
        </>
    )
}

export {page as default, metadata};