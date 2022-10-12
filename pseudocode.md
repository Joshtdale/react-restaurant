Pseudocode


Requirements

Single webpage
Menu

Bootstrap with npm

* The restaurant's name (give it a good one!)
* The restaurant's address
* The restaurant's hours of operation
* Dynamically render at least 15 menu items.
* Must be responsive

How do we conditionally render?

Pseudocode
Lofi wireframe

Name/logo
navBar
Footer { address, hours}

	logo
Apps	lunch
Dinner	drinks
	footer

State
———
Page: 1
menuItems: [{}]

	Logo	
link	Link	Link
Name, description 	Name, description 	Name, description 
		Address/hours

Props are things that will be unique to each element

<header href=“home”>
Logo
</>
<link />
<CategoryTitle />
Type
Click nav
Destination
Text
<MenuItem />
Props:
Name,
Desc,
Price
<footer />


Functions



elementCreationFunct(){

}

renderHomePage(){
Different items based on state
}

renderMenuPage(){
Different items based on state
}



App.js
Call AIP
Save to state
Page state “Home”,”lunch”


Function Home(){
Return <h1>HOME w/ state<h1/>
}


Function App(){
Let page = ‘’home”;

Const [page, setPage] = useState(‘home’)

Return (
<>
{page == ‘home’ && <Home />}
{page == ‘not home’ && <h1>NOT HOME<h1/>}
{page == ‘third home’ && <h1>3rd HOME<h1/>}
</>
)
}


———

import { useState } from 'react';

function Home() {
    return <h1>HOME w/ State</h1>
}
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

————