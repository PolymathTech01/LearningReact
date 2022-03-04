import "./Saving.css"


const Saving = (props)=> {
    return(
        <>
        
               
            <div className="flex-grow-1 d-flex justify-content-end flex-wrap">
                        <div className="card mt-5 item2 m-3 shadow" style={{width: "18rem"}}>
                                <div className="card-body">
                                   
                                </div>
                        </div>
                        <div className="card mt-5 m-3 shadow" style={{width: "18rem", height:"262.2px"}}>
                                <div className="card-body ">
                                    <h5 className="card-title">{props.name.name}</h5>
                                    <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{width: "100%", height: "6px"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>


                                   <div className="div1 box">
                                       <p className="mt-1">Total Saved</p>
                                        <p>{props.name.amountToSave}</p>
                                        
                                   </div>
                                   <div className="div2 box">
                                   <p className="mt-1 ms-2">Interest Rate</p>
                                   <p className="ms-2">{props.name.interestRate}</p>
                                   </div>
                                   <div className="div3 box">
                                   <p className="mt-1">Start Date</p>
                                   <p>{props.name.startDate}</p>
                                   </div>
                                   <div className="div4 box">
                                   <p className="mt-1 ms-2">Maturity Date</p>
                                   <p className="ms-2">{props.name.estimatedTerminationDate}</p>
                                   </div>
                                    
                                    
                                </div>
                        </div>
                </div>
    
       
        </>
    )
}

export default Saving