import "./Saving.css"
import SingleTrans from "./SingleTrans"

const Transaction = (props) => {

    
    return(
        <>
        <div className="card mt-5 m-3 item-1 shadow" style={{width: "18rem"}}>
        <div className="card-body">
        <h5 className="card-title">Transaction</h5>
        <li class="list-group-item">{props.name.name}</li>
  <p className="text-muted">{props.name.creationDate}</p>
   
    
        </div>
        </div> 
        </>
    )
}

export default Transaction