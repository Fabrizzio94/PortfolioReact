import React from 'react'
import './Banner.css'
const Banner = () => {
    return(
        <main className="site-main">
            <section class="site-banner">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-6 col-md-12 site-title">
                        <h3 class="title-text">Hey</h3>
                        <h1 class="title-text text-uppercase">I am fabricio</h1>
                        <h4 class="title-text text-uppercase">Junio developer</h4>
                        <div class="site-buttons">
                        <div class="d-flex flex-row flex-wrap">
                            <button type="button" class="btn button primary-button mr-4 text-uppercase">hire me</button>
                            <button type="button" class="btn button secondary-button text-uppercase">get cv</button>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 banner-image">
                        <img src={require("../../media/banner/banner-image.png")} alt="banner-img" class="image-fluid"/>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Banner