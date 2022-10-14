import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import axios from "axios";
import Home from './Home';
import Menu from './Menu';
import Navbar from './Navbar';

const APIUrl = "https://astute-baton-362318.ue.r.appspot.com/api/json/?format=json"


function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const response = await axios.get(APIUrl)
            // .then((response) => {
            setData(response.data);
            console.log(response.data);
            // });
        }
        getData()
    }, []);
    const [page, setPage] = useState('home')


    if (data.length === 0) {
        return (<h1>Fuck</h1>)
    } else {

        return (
            <>
                <Navbar page={setPage} />
                {page == 'home' && <Home />}
                {page == 'menu' && <Menu data={data} />}
                {/* <button onClick={() => setPage('menu')}>CLICK</button> */}
                {/* {GetData()} */}
                {/* {console.log(data[0].title)} */}
                {/* <h1>{data[0].title}</h1> */}

            </>
        )
    }
}

export default App