import React, { useEffect } from 'react'
import './Banner.css'
const Banner = ({stickyRef}) => {
    useEffect(() => {
        stickyRef.current.focus()
    })
    return(
        <main className="site-main">
            <section ref={stickyRef} className="site-banner">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6 col-md-12 site-title">
                        <h3 className="title-text">Hey</h3>
                        <h1 className="title-text text-uppercase">I am fabricio</h1>
                        <h4 className="title-text text-uppercase">Junior Developer</h4>
                        <div className="site-buttons">
                        <div className="d-flex flex-row flex-wrap">
                            <button type="button" className="btn button primary-button mr-4 text-uppercase">hire me</button>
                            <button type="button" className="btn button secondary-button text-uppercase">get cv</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 banner-image">
                        {/* <img src={require("../../media/banner/banner-image.png")} alt="banner-img" className="image-fluid"/> */}
                        <img src={require("../../media/banner/kevin.jpg")} alt="banner-img" className="image-fluid"/>

                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Banner