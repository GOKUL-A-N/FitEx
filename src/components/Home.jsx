import React from 'react';
import {Link , Outlet} from "react-router-dom"

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div className='Hero flex  h-screen w-[100%]'>
      <div className='relative top-4 left-4 w-6 h-6'>
        <h3 className='font-bold text-slate-50 text-2xl'>Fit<span className=''>Ex</span></h3>
      </div>
      <div className='flex-1  flex flex-col mt-[100px] justify-center items-center '>
          <h1 className="text-main text-7xl ">PUSH HARD FOR A BETTER TOMORROW</h1>
          <h3 className='text  flex text-2xl font-bold items-right text-right  '>Just Imagine The Result</h3>
          <h3 className='text  flex text-2xl font-bold items-right text-right '>Complete Exercise Guide</h3>
          <div className="pt-[50px]">
            <Link to="/UpperBody"><button className='button' id='text'>UpperBody</button></Link>
            <Link to="/LowerBody"><button className='button' id='text'>LowerBody</button></Link>
      
          
            </div>
      
      </div>
      
      </div>
      <Outlet />
    </div>
      
  )
}

export default Home