
// function Specials(){
//     <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">

//                 <ul className="d-flex list-unstyled mt-auto">
//                     <li className="me-auto">
//                         <a href="https://joshtdale.github.io/mind-reader/"><button className="btn btn-secondary">View project</button></a>
//                     </li>

//                     <li className="d-flex align-items-center">
//                         <svg className="bi me-2" width="1em" height="1em">
//                             <use xlink:href="#calendar3"></use>
//                         </svg>
//                         <small className="text-dark">10/07/22</small>
//                     </li>
//                 </ul>
//             </div>

// }



function Home(props) {
    return (
        <>
            <div className="jumbotron jumbotron-fluid homeJumbotron">

            </div>

            <div className="row specials">
                <div className="col text-center m-5">
                    <h3>Specials</h3>
                </div>
            </div>
            <div className="row">
                <div className="col m-3 ">
                    <div className=" card menuCards specialsCard1 specialsCard text-center">
                        <h3 className="mt-3 fs-1 titleCard card headFont">{props.data[0].title}</h3>
                    </div>
                </div>
                <div className="col m-3">
                    <div className=" card menuCards specialsCard2 specialsCard text-center">
                        <h3 className="mt-3 fs-1 titleCard card headFont">{props.data[7].title}</h3>
                    </div>
                </div>
                <div className="col m-3">
                    <div className=" card menuCards specialsCard3 specialsCard text-center">
                        <h3 className="mt-3 fs-1 titleCard card headFont">{props.data[9].title}</h3>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="card mapsCard text-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.2114130383106!2d-84.49472698420385!3d38.04215997971169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1665691595006!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home