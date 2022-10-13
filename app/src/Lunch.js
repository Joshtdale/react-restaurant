function Lunch(props){
    {console.log(props.lunch[0])}

    // props.lunch.map

    return (
        <ul>
        <li>lunch</li>
        <li>More food</li>
        <li>{props.lunch[0].title}</li>
    </ul>
    )
}

export default Lunch