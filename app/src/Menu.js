import { useState } from "react"
import Appetizers from "./Appetizers"
import Lunch from "./Lunch"

function Menu(props){

    const appetizers = props.data.filter((el) => el.category.title === 'Appetizer')
    const lunch = props.data.filter((el) => el.category.title === 'Lunch')
    const dinner = props.data.filter((el) => el.category.title === 'Dinner')
    const dessert = props.data.filter((el) => el.category.title === 'Dessert')

    {console.log(appetizers)}
    {console.log(lunch)}
    {console.log(dinner)}
    {console.log(dessert)}
    
    
    const [menuItem, setMenu] = useState('apps')
    
    return (
        <>
                <h1>Menu</h1>
                <button onClick={() => setMenu('apps')}>Apps</button>
                <button onClick={() => setMenu('lunch')}>Lunch</button>
                <button onClick={() => setMenu('dinner')}>Dinner</button>
                <button onClick={() => setMenu('drinks')}>Drinks</button>

                {menuItem == 'lunch' && <Lunch lunch={lunch}/>}
                {menuItem == 'apps' && <Appetizers />}

                {/* <h1>{props.data[0].price}</h1> */}
                {console.log(props.data)}
            </>
        )
}

export default Menu