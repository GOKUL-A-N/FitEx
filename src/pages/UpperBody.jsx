import React from 'react';
import {Link ,Outlet} from "react-router-dom";

const UpperBody = () => {
  return (
    <div className=' overflow-auto '>
      <div className='flex-1  justify-center items-center mb-[50px]'>
      <h1 className='p-[50px] text-center text-main ' >UPPER BODY WORKOUTS</h1>
        <div className='flex-1 flex flex-col justify-center items-center '>
            
            <Link to="/UpperBody/abs"><button className='Upper-button'>Abs</button></Link>
            <Link to="/UpperBody/biceps"><button className='Upper-button'>Biceps</button></Link>
            <Link to="/UpperBody/chest"><button className='Upper-button'>Chest</button></Link>
            <Link to="/UpperBody/forearms"><button className='Upper-button'>Forearms</button></Link>
            
            <Link to="/UpperBody/latsandback"><button className='Upper-button'>LatsAndBack</button></Link>
            <Link to="/UpperBody/shoulders"><button className='Upper-button'>Shoulders</button></Link>
            <Link to="/UpperBody/triceps"><button className='Upper-button'>Triceps</button></Link>
            <Link to="/UpperBody/traps"><button className='Upper-button'>Traps</button></Link>
        </div>
      </div>
      <hr className='w-[100%] h-3 flex justify-center self-center'/>
        <Outlet />
    </div>
  )
}

export default UpperBody