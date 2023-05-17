import React from 'react'
import { abs } from '../../constants'
import Card from '../../components/Card'
import { AnimateOnScroll } from 'animate-on-scroll-framer'
const Abs = () => {
  return (
    <div className='flex-1 flex flex-col justify-center items-center '>
      
      <h1 className='text-main p-[40px]'>ABS:</h1>
      <AnimateOnScroll animation='fadeInDown' duration={2} >
       <div className='flex flex-col justify-center w-[100%]'>
       {abs.map((ele,index) => 
            <div key={ele.id}>
              <Card 
                  title={ele.title}
                  link={ele.link}
                  difficulty={ele.difficulty}
                  

              />

            </div>
        )}
       </div>
       </AnimateOnScroll>
    </div>
  )
}

export default Abs