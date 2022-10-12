import { useState } from 'react';
import Home from './Home';


function App() {
    const [ page, setPage ] = useState('home')
    return (
        <>
        {page == 'home' && <Home />}
        {page == 'not home' && <h1>NOT HOME</h1>}
        {page == 'third home' && <h1>3rd HOME</h1>}
        <button onClick={() => setPage('not home')}>CLICK</button>
        </>
    )
}

export default App