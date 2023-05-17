import React from 'react'
import { biceps } from '../../constants'
import Card from '../../components/Card'
import { AnimateOnScroll } from 'animate-on-scroll-framer'

const Biceps = () => {
  return (
    <div className='flex-1 flex flex-col justify-center items-center '>
      
      <h1 className='text-main p-[40px]'>BICEPS:</h1>
      <AnimateOnScroll animation='fadeInDown' duration={2} >
       <div className='w-[100%]'>
       {biceps.map((ele,index) => 
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

export default Biceps