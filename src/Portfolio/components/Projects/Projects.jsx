import React from 'react'
import './Projects.css'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


const Projects = () => {
    return (
        <main className="site-main">
            <section class="project-area">
                <div class="container">
                    <div class="project-title pb-5">
                        <h1 class="text-uppercase title-h1">Recently Dne project</h1>
                        <h1 class="text-uppercase title-h1">Quality Work</h1>
                    </div>
                   
                    <div class="row grid">
                        <div class="col-lg-4 col-md-6 col-sm-12 element-item latest">
                            <div class="our-project">
                            <div class="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p1.jpg")}
                                image={require("../../media/portfolio/p1.jpg")} />
                                {/* <img src={require("../../media/portfolio/p1.jpg")} alt="portfolio-1"/> */}
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">Minimun Desing</h4>
                                <span class="text-secondary">Latest, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
                            <div class="our-project">
                            <div class="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p2.jpg")}
                                image={require("../../media/portfolio/p2.jpg")} />
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">Paint Wall</h4>
                                <span class="text-secondary">Popular, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 element-item popular">
                            <div class="our-project">
                            <div class="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p3.jpg")}
                                image={require("../../media/portfolio/p3.jpg")} />
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">Female Light</h4>
                                <span class="text-secondary">Latest, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
                            <div class="our-project">
                            <div class="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p4.jpg")} 
                                image={require("../../media/portfolio/p4.jpg")} />
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">Fouurth Area</h4>
                                <span class="text-secondary">Upcoming, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
                            <div class="our-project">
                            <div class="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p5.jpg")}
                                image={require("../../media/portfolio/p5.jpg")} />
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">Multiple Area</h4>
                                <span class="text-secondary">Upcoming, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 element-item following">
                            <div class="our-project">
                            <div class="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p6.jpg")}
                                image={require("../../media/portfolio/p6.jpg")} />
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">Together Sign</h4>
                                <span class="text-secondary">Folling, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 element-item following">
                            <div class="our-project">
                            <div class="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p7.jpg")}
                                image={require("../../media/portfolio/p7.jpg")} />
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">Green Heaven</h4>
                                <span class="text-secondary">Folling, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 element-item following">
                            <div class="our-project">
                            <div class="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p8.jpg")}
                                image={require("../../media/portfolio/p8.jpg")} />
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">Fly Male</h4>
                                <span class="text-secondary">Folling, Portfolio</span>
                            </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 element-item following">
                            <div class="our-project">
                            <div class="img">
                                <ReactFancyBox thumbnail={require("../../media/portfolio/p9.jpg")}
                                image={require("../../media/portfolio/p9.jpg")} />
                            </div>
                            <div class="title py-4">
                                <h4 class="text-uppercase">Camera Lens</h4>
                                <span class="text-secondary">upcoming, Portfolio</span>
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