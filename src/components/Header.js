import Button from "./Button"
import "./Header.css"
const Header = () => {
    return(
        <section>
        <form className="">
            <div className="flex-container">
            <div className="item1 face">facebook</div>
            <div className="mt-2" >
                <input type="email"  className="form-control" placeholder="Email"/>
            </div>
            <div className="mt-2">
                
                <input type="password" className="two form-control" id="inputPassword" placeholder="Password"/>
            </div>
            <div className=" ms-3 me-2 mt-1">
                <Button name="Log in"/>
            </div>
            <div><p className="mt-2 me-3"><a href="#">Forgotten Password?</a></p></div>
            </div>
            </form>
           
        </section>
    )
}



export default Header