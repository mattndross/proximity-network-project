import "./LandingPageAbout.css"
import img1 from "../../assets/img/img-about/img.png"
import bg from "../../assets/img/img-about/bg-about.jpg"
import icon1 from "../../assets/img/img-about/icon-1.png"
import icon2 from "../../assets/img/img-about/icon-2.png"
import icon3 from "../../assets/img/img-about/icon-3.png"
import icon4 from "../../assets/img/img-about/icon-4.png"

const LandingPageAbout = () => {
    return (
        <section id="about" style={{ backgroundImage: `url(${bg})` }}>
            <div className="container">
                <div className="header-about">
                    <h1>why we choose the best <span className="d-block d-md-inline">organic stores <span style={{ color: 'black' }}>for you</span></span> </h1>
                    <p>Enjoy your health, buy organic products.</p>
                </div>
                <div className="row about-icon-img">


                    <div className=" col-lg-6 row">
                        <div className="col-lg-6">
                            <div className="about-text">
                                <h2> <img src={icon1} alt="" />Best Quality</h2>
                                <p>From raw material selection to purchasing, official control ensures that all processes comply with all quality standards.</p>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="about-text">

                                <h2> <img src={icon1} alt="" />100% Organic</h2>

                                <p>No preservaties,dyes, antibiotics, chemical fertilizers or pesticides are used, and they are made entirely from organic products.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text">
                                <h2> <img src={icon1} alt="" />Premiun Quality</h2>

                                <p>The products offered are 100% organic. These processes allow us to maintain the purity of the product.</p>
                            </div>


                        </div>

                        <div className="col-lg-6">
                            <div className="about-text">
                                <h2> <img src={icon1} alt="" />Family Healthy</h2>
                                <p>They have more nutrients, thanks to the use of natural fertilizers, with more vitamins, minerals and antioxidants.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-6 align-self-center">
                        <div>
                            <img src={img1} alt="" className="img-fluid" />

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )

}
export default LandingPageAbout;