import { useState } from "react"
import Appetizers from "./Appetizers"
import Lunch from "./Lunch"

function Menu(props){

    const [menuItem, setMenu] = useState('Appetizers')
    const menuItems = props.data.filter((el) => el.category.title === menuItem)
    // const lunch = props.data.filter((el) => el.category.title === 'Lunch')
    // const dinner = props.data.filter((el) => el.category.title === 'Dinner')
    // const dessert = props.data.filter((el) => el.category.title === 'Dessert')

    

    // console.log(appetizers)
    // {console.log(lunch)}
    // {console.log(dinner)}
    // {console.log(dessert)}
    // {console.log(menuItem)}
    
    
    
    return (
        <>
                <h1>Menu</h1>

                <button onClick={() => setMenu('Appetizer')}>Appetizers</button>
                <button onClick={() => setMenu('Lunch')}>Lunch</button>
                <button onClick={() => setMenu('Dinner')}>Dinner</button>
                <button onClick={() => setMenu('Dessert')}>Desserts</button>

                {menuItems.map((item) => {
                    return (
                        <>
                        <div>{item.title}</div>
                        <div>{item.description}</div>
                        <div>{item.price}</div>
                        </>

                    )
                })
                }

                {/* {menuItem == 'lunch' && <Lunch lunch={lunch}/>} */}
                {/* {menuItem == 'apps' && <Appetizers />} */}

                {/* <h1>{props.data[0].price}</h1> */}
                {/* {console.log(props.data)} */}
            </>
        )
}

export default Menu