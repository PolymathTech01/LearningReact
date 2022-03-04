


const Accordion = (props) => {
    return (
      <div className="container mt-5">
          
            <div className="card" style={{width: "18rem"}}>
  <div className="card-header">
      {props.name.id}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"> {props.name.type}</li>
    <li className="list-group-item"> {props.name.name}</li>
    <li className="list-group-item"> {props.name.ppu}</li>
  </ul>
</div>
  </div>

        
    )
}

export default Accordion