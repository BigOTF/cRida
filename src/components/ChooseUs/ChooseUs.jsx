import React from 'react'
import ChooseUsSide from './ChooseUsSide'
import ChooseUsSideDetails from './ChooseUsSideDetails'

const ChooseUs = () => {
  return (
    <div className='md:w-[1340px] w-[428px] md:h-[627px] md:mt-[100px] pt-[100px] md:pt-0 flex flex-col md:flex-row justify-between bg-[#DEE7F5]'>
        <ChooseUsSide />
        <ChooseUsSideDetails />
    </div>
  )
}

export default ChooseUs