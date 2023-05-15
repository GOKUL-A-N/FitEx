import React from 'react'
import { glutes } from '../../constants';
import Card from '../../components/Card';

const Glutes = () => {
  return (
    <div className='flex-1 flex flex-col justify-center items-center '>
      
      <h1 className='text-main p-[40px]'>GLUTES:</h1>
       <div className='w-[85%]'>
       {glutes.map((ele,index) => 
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

export default Glutes