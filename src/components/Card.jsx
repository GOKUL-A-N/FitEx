import React from 'react'
import ReactPlayer from 'react-player'

const Card = (props) => {
  return (
    <div className='p-6 bg-gray-950'>
      <h1 className='text-[24px] ' id='text'>{props.title}</h1>
      <br className='sm:hidden'/>
      <h3 className='text'>{props.difficulty}</h3>
      <br className='sm:hidden'/>
      <ReactPlayer  className="hero"  width="80%"
        url={props.link} loop="true" playing="true"
      />
    </div>
  )
}

export default Card