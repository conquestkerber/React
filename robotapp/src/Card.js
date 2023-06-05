import React from 'react'
import './Card.css'

const Card = (props) => {
    const {id, name, username} = props;
    return (
        <div className='robo'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robophot" />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
            </div>
        </div>
    )
}

export default Card