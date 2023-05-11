import React from 'react'
import {Link , Outlet} from "react-router-dom"

const LowerBody = () => {
  return (
    <div className='overflow-auto '>
        <div className='flex-1 justify-center items-center'>
        <h1 className='p-[50px] text-center text-main'>LOWERBODY WORKOUTS</h1>
        <div className='flex-1 flex flex-col justify-center items-center'>
        <Link to="/LowerBody/calf"><button className='Upper-button'>Calf</button></Link>
        <Link to="/LowerBody/glutes"><button className='Upper-button'>Glutes</button></Link>
        <Link to="/LowerBody/hamstring"><button className='Upper-button'>Hamstring</button></Link>
        <Link to="/LowerBody/quads"><button className='Upper-button'>Quads</button></Link>
        </div>
        </div>
        <Outlet />
    </div>
  )
}

export default LowerBody