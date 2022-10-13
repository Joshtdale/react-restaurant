import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import axios from "axios";
import Home from './Home';
import Menu from './Menu';
import Navbar from './Navbar';

const APIUrl = "https://astute-baton-362318.ue.r.appspot.com/api/json/?format=json"

// React.useEffect(() => {
//     axios.get(`${APIUrl}`)
//         .then((response) => {
//             setData(response.data);
//         });

// }, []);

// function GetData() {
//     const [data, setData] = React.useState([]);
//     console.log('yes');
//     React.useEffect(() => {
//         axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/?format=json')
//             .then((response) => {
//                 setData(response.data);
//                 console.log(response.data);
//             });
//         }, []);
//     };
// GetData()

function App() {
    const [data, setData] = useState([]);

    // console.log('yes');
    useEffect(() => {
        async function getData(){
    await axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/?format=json')
            .then((response) => {
                setData(response.data);
                // console.log(response.data);
            });
        }
        getData()
        }, []);

    const [page, setPage] = useState('home')
    return (
        <>
            <Navbar />
            {page == 'home' && <Home />}
            {page == 'menu' && <Menu />}
            {page == 'third home' && <h1>3rd HOME</h1>}
            <button onClick={() => setPage('menu')}>CLICK</button>
            {/* {GetData()} */}
            {/* {console.log(data[0].title)} */}
            {/* <h1>{data[0].title}</h1> */}

        </>
    )
}

export default App