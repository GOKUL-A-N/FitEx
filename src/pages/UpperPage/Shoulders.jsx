import React from 'react'
import { shoulders } from '../../constants'
import Card from '../../components/Card'

const Shoulders = () => {
  return (
    <div className='flex-1 flex flex-col justify-center items-center '>
      
      <h1 className='text-main p-[40px]'>SHOULDERS:</h1>
       <div className='w-[85%]'>
       {shoulders.map((ele,index) => 
            <div key={ele.id}>
              <Card 
                  title={ele.title}
                  link={ele.link}
                  difficulty={ele.difficulty}
                  

              />

            </div>
        )}
       </div>
      
    </div>
  )
}

export default Shoulders