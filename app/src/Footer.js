function Footer() {
    return (
        <>
    <div className="container footerContainer justify-content-center">
        <div className="row footerRow">
            <div className="col">
        <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
            <div className="col-md-4 align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
                </a>
                <span className="m-4 mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
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