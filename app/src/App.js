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

const APIUrl = "https://8000-joshtdale-djangosandbox-b3h50sr8ag1.ws-us74.gitpod.io/books/"

const cart = []
const price = []




function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await axios.get(APIUrl)
            let newResponse = response.data.data
            setData(newResponse);
            // console.log(response.data.data[1]);
        }
        getData()
    }, []);

    // const [storage, setStorage] = useState((() => {
    //     return JSON.parse(localStorage.getItem("list")) || [];
    // }))
    
    // useEffect(() => {
    //     localStorage.setItem('list', JSON.stringify(storage))
    // }, [storage]);

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