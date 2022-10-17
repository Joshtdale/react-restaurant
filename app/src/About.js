import image from './images/IMG_6818.jpg'

function About() {
    return (
        <div className="containerImage text-center">
            <div className="row m-5">
                <div className="col">
                    <img className="img2" src={image}></img>
                </div>
                <div className="col">
                    <p>My dad puts mustard on his tacos and calls it "secret sauce."</p>
                </div>
            </div>
        </div>
    )
}

export default About