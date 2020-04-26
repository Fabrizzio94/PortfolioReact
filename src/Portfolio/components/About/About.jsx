import React, { useEffect} from 'react'
import './About.css'
const About =  ({stickyRef}) => {
    useEffect(() => {
        stickyRef.current.focus()
    })
    return(
        <main className="site-main">
            <section ref={stickyRef} className="about-area">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-image">
                        {/* <img src={require("../../media/about-us.png")} alt="About us" className="img-fluid"/> */}
                        <img src={require("../../media/about-me.svg")} alt="About us" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 about-title">
                        <h2 className="text-uppercase pt-5">
                        <span>let me</span>
                        <span>introduce</span>
                        <span>myself</span>
                        </h2>
                        <div className="paragraph py-4 w-75">
                        <p className="para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sint eum ratione quia explicabo iste
                            adipisci aspernatur doloremque! Molestias, voluptates!
                        </p>
                        <p className="para">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt aut alias, atque accusamus quod
                            nemo natus architecto iusto? Optio ipsam itaque impedit odio voluptatibus perspiciatis blanditiis
                            ratione quae iusto, vero, labore placeat odit vitae id adipisci quaerat maiores cumque?
                        </p>
                        </div>
                        <button type="button" className="btn button primary-button text-uppercase">Download CV</button>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About