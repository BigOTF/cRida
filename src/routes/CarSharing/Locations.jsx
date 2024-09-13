import React, { useState } from 'react'
import carSharingLocation from '../../data/CarSharingLocation'

const Locations = () => {
    const [locationData, setLocationData] = useState(carSharingLocation);

    const DisplayCarLocations = () => {
        return (
            locationData.map((data) => {
                return (
                    <div key={data.id} className='flex flex-col gap-[16px]'>
                        <img src={data.image} alt='location-image' className='md:h-[259px] h-[200px]'/>
                        <p className='nunito-400 text-[#363247] text-[24px] leading-[32.74px] text-center'>{data.location}</p>
                    </div>
                )
            })
        )
    }
  return (
    <div className='w-full mt-[50px] md:mt-[100px] px-[10px] md:px-[100px] flex flex-col md:items-center md:justify-center gap-[20px] md:gap-[25px]'>
        <p className='nunito-700 text-[#070125] text-[24px] leading-[32.74px] md:text-[40px] md:leading-[54.56px] text-center'>Available All Over Abuja, F.C.T</p>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-[20px]'>
            <DisplayCarLocations />
        </div>
        
    </div>
  )
}

export default Locations