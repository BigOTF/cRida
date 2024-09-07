import React from 'react'
import ChooseUsSide from './ChooseUsSide'
import ChooseUsSideDetails from './ChooseUsSideDetails'

const ChooseUs = () => {
  return (
    <div className='w-full mt-[90px] md:mt-[100px] md:h-[627px]'>


      <div className='flex flex-col gap-[80px] md:flex-row md:gap-[100px] mx-[30px] md:mx-[100px]'>

        <div>
          <ChooseUsSide />
        </div>

        <div>
          <ChooseUsSideDetails />
        </div>

      </div>

     
        
        
    </div>
  )
}

export default ChooseUs