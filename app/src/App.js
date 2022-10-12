import { useState } from 'react';
import React from 'react';
import axios from "axios";
import Home from './Home';
import Menu from './Menu';

const APIUrl = "https://astute-baton-362318.ue.r.appspot.com/api/json/?format=json"

function GetData() {
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        axios.get(`${APIUrl}`).then((response) => {
            setData(response.data);
        });
    }, []);
}
GetData()


function App() {
    const [page, setPage] = useState('home')
    return (
        <>
            {page == 'home' && <Home />}
            {page == 'menu' && <Menu />}
            {page == 'third home' && <h1>3rd HOME</h1>}
            <button onClick={() => setPage('menu')}>CLICK</button>
        </>
    )
}

export default App