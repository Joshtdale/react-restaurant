import { useState } from "react"

function Menu(props){

    const 

    function Apps(){
        return (
            <ul>
            <li>apps</li>
            <li>More food</li>
            <li>Also food</li>
        </ul>
        )
    }

    function Lunch(){
        return (
            <ul>
            <li>lunch</li>
            <li>More food</li>
            <li>Also food</li>
        </ul>
        )
    }


        const [menuItem, setMenu] = useState('apps')

        return (
            <>
                <h1>Menu</h1>
                <button onClick={() => setMenu('apps')}>Apps</button>
                <button onClick={() => setMenu('lunch')}>Lunch</button>
                <button onClick={() => setMenu('dinner')}>Dinner</button>
                <button onClick={() => setMenu('drinks')}>Drinks</button>

                {menuItem == 'lunch' && <Lunch />}
                {menuItem == 'apps' && <Apps />}
                {/* <h1>{props.data[0].price}</h1> */}
                {/* {console.log(props.data[0].price)} */}
            </>
        )
}

export default Menu