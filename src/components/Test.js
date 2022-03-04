const Test = (props) => {

    const data = props.name
    return (
        <div className="bg-success">
            <p>{props.name.amountToSave}</p>

        </div>
    )
}

export default Test