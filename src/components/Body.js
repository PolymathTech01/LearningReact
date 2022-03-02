import "./Body.css"

const Body = () => {
    return(
        <section className="outer">
        <div className="center">
            <h5 className="mb-4">Find Your Account</h5><hr />
            <p>Please enter your email address or your mobile number to search for your account.</p>
            <form>
               <input className="form-control mb-1 width" placeholder="Email address or mobile number"/><hr/> 
               <span className="toRight">
                <button className="btn btn-light btnBorder cancelBtn me-2">Cancel</button>
                <button className="btn btn-primary searchBtn btnBorder">Search</button>
                </span>
            </form>
        </div>
        </section>
    )
}

export default Body
