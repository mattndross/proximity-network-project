import React from 'react'
import './Button.css'

export default function Button(props) {
    return (
        <div>
            <button
            className={`btn ${props.color} ${props.textColor}`}>{props.text}</button>
        </div>
    )
}