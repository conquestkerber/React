import React from 'react'

function Card(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt="avatar" />
        </div>
    )
}

export default Card;