import React from 'react'
import "./Loading.css"
function Loading() {
    return (
        <div id="loading">
            <h1>Loading</h1>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loading
