import React from 'react'

function AboutInfoCard(props) {
    return (
        <div className="about-text">
            <h2> <img src={props.img} alt="" width="50px" height="50px" />{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default AboutInfoCard
