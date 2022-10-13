function Navbar(page){

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <div className="row justify-content-center">
                                <div className="col-sm-12 col-md-3">
                                    {/* <a className="nav-link active text-light" aria-current="page" href="#">Home</a> */}
                                    <button className="btn text-light" onClick={() => setPage('home')}>Home</button>
                                </div>
                                <div className="col-sm-12 col-md-3">
                                {/* <a className="nav-link text-light" href="#">Menu</a> */}
                                <button className="btn text-light" onClick={() => setPage('menu')}>Menu</button>

                                </div>
                                <div className="col-sm-12 col-md-3">
                                {/* <a className="nav-link text-light" href="#">About</a> */}
                                <button className="btn text-light" onClick={() => setPage('about')}>About</button>

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