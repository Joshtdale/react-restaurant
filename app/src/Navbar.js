import { useState } from "react";


function Navbar(props){
let page = props.page

// function theAnswer(){
//     page('')
// }

    // const [page, setPage] = useState('') 
    console.log(props)

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <div className="row justify-content-center">
                                <div className="col-sm-12 col-md-3">
                                    <button className="btn text-light" onClick={() => page('home') && console.log('working')}>Home</button>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                <button className="btn text-light" onClick={() => page('menu')}>Menu</button>

                                </div>
                                <div className="col-sm-12 col-md-3">
                                <button className="btn text-light" onClick={() => page('about')}>About</button>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );

};

export default Navbar