import React from 'react'

const Card = (props) => {
  return (
    <div className='p-6 card'>
      <h1>{props.title}</h1>
      <h3>{props.difficulty}</h3>
      <h3>{props.link}</h3>
    </div>
  )
}

export default Card