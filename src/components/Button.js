import "./Header.css"
const Button = (props)=> {
    const clickme = ()=> {
        alert("click me")
    }
    return (
        <div>
            <button className="btn btn-primary cusBtn">
                {props.name}
            </button>
        </div>
    )
}

export default Button