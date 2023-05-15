import React from 'react'
import { calf } from '../../constants';
import Card from "../../components/Card";

const Calf = () => {
  return (
    <div className='flex-1 flex flex-col justify-center items-center '>
      
      <h1 className='text-main p-[40px]'>CALF:</h1>
       <div className='w-[85%]'>
       {calf.map((ele,index) => 
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

export default Calf