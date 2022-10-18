function Footer() {
    return (
        <>
    <div className="container footerContainer justify-content-center">
        <div className="row footerRow">
            <div className="col">
        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top footerBottom">
            <div className="col-md-4 align-items-center">
                <div className="text-center text-muted m-4 mb-1">
                    725 National Ave<br></br>
                    Lexington, KY 40502<br></br>
                    Mon-Fri 11-11
                    </div>
            </div>
            

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted fa fa-twitter" href="#"></a></li>
                <li className="ms-3"><a className="text-muted fa fa-instagram" href="#"></a></li>
                <li className="ms-3"><a className="text-muted fa fa-facebook" href="#"></a></li>
            </ul>
        </footer>
        </div>
        </div>
    </div>
    </>
    )
}

export default Footer