import React from 'react'

function CarouselSlide(props) {
    return (
        <div className={`carousel-item ${props.active ? 'active' : ''}`} style={{ backgroundImage: `url(${props.propsImg})` }}>
            <div className="carousel-container">
                <div className="container-fluid content-text">
                    <h2 className="animate__animated animate__fadeInDown"><span style={{ display: "block" }}>Welcome to healthy </span>ORGANIC PRODUCTS</h2>
                    <p className="animate__animated animate__fadeInUp">We offer you a list of stores that only offer healthy and organic products. The goal is that you can enjoy the authentic taste of the products, at the same time, that you take care of your health. </p>

                </div>
            </div>
        </div>
    )
}

export default CarouselSlide
