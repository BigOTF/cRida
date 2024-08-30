import React from 'react'
import ChooseUsSide from './ChooseUsSide'
import ChooseUsSideDetails from './ChooseUsSideDetails'

const ChooseUs = () => {
  return (
    <div className='md:w-[1340px] md:h-[627px] md:mt-[100px] flex flex-col md:flex-row justify-between'>
        <ChooseUsSide />
        <ChooseUsSideDetails />
    </div>
  )
}

export default ChooseUs