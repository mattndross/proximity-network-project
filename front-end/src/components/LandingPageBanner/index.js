import "./LandingPageBanner.css"
import CarouselSlide from "./CarouselSlide"
import slide1 from '../../assets/img/banner/slide-1.jpg'
import slide2 from '../../assets/img/banner/slide-2.jpg'
import slide3 from '../../assets/img/banner/slide-3.jpg'

const LandingPageBanner = () => {
    return (
        <section id="hero">
            <div className="hero-container">
                <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

                    <ol id="hero-carousel-indicators" className="carousel-indicators">
                        <li data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
                        <li data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></li>
                        <li data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></li>
                    </ol>

                    <div className="carousel-inner" role="listbox">
                        <div className="container">

                            <CarouselSlide propsImg={slide1} active={true} />
                            <CarouselSlide propsImg={slide2} />
                            <CarouselSlide propsImg={slide3} />
                        </div>



                    </div>

                    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                    </a>

                    <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                    </a>

                </div>
            </div>
        </section >

    )
}

export default LandingPageBanner;