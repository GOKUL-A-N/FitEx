import React from 'react'
import { latsandback } from '../../constants'
import Card from '../../components/Card'
import { AnimateOnScroll } from 'animate-on-scroll-framer';

const LatsAndBack = () => {
  return (
    <div className='flex-1 flex flex-col justify-center items-center '>
      
      <h1 className='text-main p-[40px]'>LATS AND BACK:</h1>
      <AnimateOnScroll animation='fadeInDown' duration={2} >
       <div className='w-[100%]'>
       {latsandback.map((ele,index) => 
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

export default LatsAndBack