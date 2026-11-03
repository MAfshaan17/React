import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.user}</h1>
      <h2>{props.age}</h2>
      <img
        src={props.img}
        alt="React Logo"
      />

      <p>
        React is a JavaScript library for building user interfaces.
        It is used to develop single-page and mobile applications.
      </p>

      <button>Read More</button>
    </div>
  )
}

export default Card