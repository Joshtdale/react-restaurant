import { useState } from "react"
// import Appetizers from "./Appetizers"
// import Lunch from "./Lunch"

function Menu(props) {

    const [menuItem, setMenu] = useState('Appetizer')
    const menuItems = props.data.filter((el) => el.category.title === menuItem)
    // const lunch = props.data.filter((el) => el.category.title === 'Lunch')
    // const dinner = props.data.filter((el) => el.category.title === 'Dinner')
    // const dessert = props.data.filter((el) => el.category.title === 'Dessert')





    return (
        <>
            <div className="row">
                <div className="col text-center">
                    <h1 className="headFont">Menu</h1>
                    <h3>{menuItem}</h3>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <button className="btn" data-category='Appetizer' onClick={() => setMenu('Appetizer')}>Appetizers</button>
                </div>
                <div className="col">
                    <button className="btn" data-category='Breakfast' onClick={() => setMenu('Breakfast')}>Breakfast</button>
                </div>
                <div className="col">
                    <button className="btn" data-category='Lunch' onClick={() => setMenu('Lunch')}>Lunch</button>
                </div>
                <div className="col">
                    <button className="btn" data-category='Dinner' onClick={() => setMenu('Dinner')}>Dinner</button>
                </div>
                <div className="col">
                    <button className="btn" data-category='Dessert' onClick={() => setMenu('Dessert')}>Desserts</button>
                </div>
                <div className="col">
                    <button className="btn" data-category='Side' onClick={() => setMenu('Side')}>Sides</button>
                </div>
            </div>

            <div className="row menuRow">
                {menuItems.map((item) => {
                    return (
                        <>
                            <div className="col-sm-12 col-lg-6">
                                <div className="card mx-5 cardSpacing">
                                    <div className="card-header headFont">
                                        {item.title}
                                    </div>
                                    <div className="card-body overflow-auto">
                                        <div>
                                            <div>{item.description}</div>
                                            <footer className="opacity-50 m-2 text-end">${Math.round(item.price)}</footer>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </>

                    )
                })
                }
            </div>

        </>
    )
}

export default Menu