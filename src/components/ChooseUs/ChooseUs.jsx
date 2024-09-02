import React from 'react'
import ChooseUsSide from './ChooseUsSide'
import ChooseUsSideDetails from './ChooseUsSideDetails'

const ChooseUs = () => {
  return (
    <div className='md:w-[1440px] w-[428px] md:h-[627px] md:pt-[100px] pt-[100px] flex flex-col md:flex-row justify-between bg-[#DEE7F5]'>
        <ChooseUsSide />
        <ChooseUsSideDetails />
    </div>
  )
}

export default ChooseUs