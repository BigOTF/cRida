import React, { useState } from 'react'
import salesSubHeroData from '../../data/SalesSubHeroData'

const SalesSubHero = () => {
    const [carData, setCarData] = useState(salesSubHeroData);

    const DisplayCarData = () => {
        return (
            carData.map((data) => {
                return (
                    <div key={data.id} className='flex flex-col gap-[8px]'>
                        <img src={data.image} alt='Cars' className='object-cover'/>
                        <p className='text-[#363247] nunito-400 md:text-[24px] md:leading-[32.74px] text-center'>{data.name}</p>
                    </div>
                )
            })
        )
    }
  return (
    <div className='w-full px-[10px] md:px-[100px]'>

        <div className='grid grid-cols-2 gap-[30px] md:grid-cols-6 md:gap-[25px]'>
            <DisplayCarData />
        </div>
    </div>
  )
}

export default SalesSubHero