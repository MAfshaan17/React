import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div className="card">
      <h1>React Fundamentals</h1>

      <img
        src="https://tse1.mm.bing.net/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?r=0&pid=Api&h=220&P=0"
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