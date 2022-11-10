import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import axios from "axios";
import Home from './Home';
import Menu from './Menu';
import Cart from './Cart';
import About from './About';
import Navbar from './Navbar';
import './app.css';

const APIUrl = "https://8000-joshtdale-restaurantbac-kzlenc9sh18.ws-us75.gitpod.io/menuitems/"

const cart = []
const price = []


function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await axios.get(APIUrl)
            setData(response.data);
            // console.log(response.data);
        }
        getData()
    }, []);

    const [page, setPage] = useState('home')

    // console.log(cart)
    // console.log(price)

    if (data.length === 0) {
        return (
            <div className="container text-center">
        <h1>Loading please wait...</h1>
        </div>
        )
    } else {

        return (
            <>
                <Navbar page={setPage} />
                {page == 'home' && <Home data={data}/>}
                {page == 'menu' && <Menu data={data} cart={cart} price={price}/>}
                {page == 'cart' && <Cart cart={cart} price={price}/>}
                {page == 'about' && <About/>}
            </>
        )
    }
}

export default App