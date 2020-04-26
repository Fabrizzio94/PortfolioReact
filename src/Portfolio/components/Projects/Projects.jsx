import React, { useEffect } from 'react'
import './Projects.css'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


const Projects = ({stickyRef}) => {
    useEffect(() => {
        // return () => handleClick()
        stickyRef.current.focus()
        // return  () => stickyRef.current.focus()
    })
    
    return (
        <main className="site-main">
            <section ref={stickyRef} className="project-area">
                <div className="container">
                    <div className="project-title pb-5">
                        <h1 className="text-uppercase title-h1">Recently Dne project</h1>
                        <h1 className="text-uppercase title-h1">Quality Work</h1>
                    </div>
                   
                    <div className="row grid">
                        <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
                            <div className="our-project">
                            <div className="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p1.jpg")}
                                image={require("../../media/portfolio/p1.jpg")} />
                            </div>
                            <div className="title py-4">
                                <h4 className="text-uppercase">Minimun Desing</h4>
                                <span className="text-secondary">Latest, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 element-item popular">
                            <div className="our-project">
                            <div className="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p2.jpg")}
                                image={require("../../media/portfolio/p2.jpg")} />
                            </div>
                            <div className="title py-4">
                                <h4 className="text-uppercase">Paint Wall</h4>
                                <span className="text-secondary">Popular, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 element-item popular">
                            <div className="our-project">
                            <div className="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p3.jpg")}
                                image={require("../../media/portfolio/p3.jpg")} />
                            </div>
                            <div className="title py-4">
                                <h4 className="text-uppercase">Female Light</h4>
                                <span className="text-secondary">Latest, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
                            <div className="our-project">
                            <div className="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p4.jpg")} 
                                image={require("../../media/portfolio/p4.jpg")} />
                            </div>
                            <div className="title py-4">
                                <h4 className="text-uppercase">Fouurth Area</h4>
                                <span className="text-secondary">Upcoming, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
                            <div className="our-project">
                            <div className="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p5.jpg")}
                                image={require("../../media/portfolio/p5.jpg")} />
                            </div>
                            <div className="title py-4">
                                <h4 className="text-uppercase">Multiple Area</h4>
                                <span className="text-secondary">Upcoming, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 element-item following">
                            <div className="our-project">
                            <div className="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p6.jpg")}
                                image={require("../../media/portfolio/p6.jpg")} />
                            </div>
                            <div className="title py-4">
                                <h4 className="text-uppercase">Together Sign</h4>
                                <span className="text-secondary">Folling, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 element-item following">
                            <div className="our-project">
                            <div className="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p7.jpg")}
                                image={require("../../media/portfolio/p7.jpg")} />
                            </div>
                            <div className="title py-4">
                                <h4 className="text-uppercase">Green Heaven</h4>
                                <span className="text-secondary">Folling, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 element-item following">
                            <div className="our-project">
                            <div className="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p8.jpg")}
                                image={require("../../media/portfolio/p8.jpg")} />
                            </div>
                            <div className="title py-4">
                                <h4 className="text-uppercase">Fly Male</h4>
                                <span className="text-secondary">Folling, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 element-item following">
                            <div className="our-project">
                            <div className="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p9.jpg")}
                                image={require("../../media/portfolio/p9.jpg")} />
                            </div>
                            <div className="title py-4">
                                <h4 className="text-uppercase">Camera Lens</h4>
                                <span className="text-secondary">upcoming, Portfolio</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
 }

export default Projects