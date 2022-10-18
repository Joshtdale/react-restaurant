// import { useState } from "react";
import './navbar.css';
import cartIcon from './images/download.svg';


function Navbar(props) {
    // let page = props.page

    // function theAnswer(){
    //     page('')
    // }

    // const [page, setPage] = useState('') 
    // console.log(props)

    return (
        <>
            <nav className="navbar navbarStyle navbar-expand-lg sticky-top bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center navRow" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <div className="row justify-content-center navRow">
                                <div className="col-sm-12 col-md-3 text-center">
                                    <button className="btn" onClick={() => props.page('home')}>Home</button>
                                </div>
                                <div className="col-sm-12 col-md-3 text-center">
                                    <button className="btn" onClick={() => props.page('menu')}>Menu</button>

                                </div>
                                <div className="col-sm-12 col-md-3 text-center">
                                    <button className="btn" onClick={() => props.page('about')}>About</button>

                                </div>
                                <div className="col-sm-12 col-md-3 text-center">
                                    <button className="btn" onClick={() => props.page('cart')}><img className="shoppingIcon" src={cartIcon}></img></button>

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