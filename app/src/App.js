import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import axios from "axios";
import Home from './Home';
import Menu from './Menu';
import Cart from './Cart';
import Navbar from './Navbar';
import './app.css';

const APIUrl = "https://astute-baton-362318.ue.r.appspot.com/api/json/?format=json"

const cart = []
const price = []
console.log(cart)
console.log(price)

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await axios.get(APIUrl)
            setData(response.data);
            console.log(response.data);
        }
        getData()
    }, []);

    const [page, setPage] = useState('home')



    if (data.length === 0) {
        return (<h1>Fuck</h1>)
    } else {

        return (
            <>
                {/* <div className='stupidContainer'></div> */}
                <Navbar page={setPage} />
                {page == 'home' && <Home />}
                {page == 'menu' && <Menu data={data} cart={cart}/>}
                {page == 'cart' && <Cart cart={cart} price={price}/>}
            </>
        )
    }
}

export default App