import React, { useState } from 'react'

const HailingForm = () => {
    const [from, setFrom] = useState('')
    const [goingTo, setGoingTo] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
  return (
    <div className='w-full flex items-center justify-center mt-[80px] md:mt-[100px] md:px-[400px]'>

        <div className='flex flex-col gap-[20px] px-[32px] py-[24px] md:px-[48px] md:py-[24px] bg-[#CBC3F3]'>
            <div className='flex flex-col gap-[8px]'>
                <p className='nunito-700 text-[#070125] md:text-[#BF5B12] text-[24px] leading-[32.74px]'>Can’t find your ride?</p>
                <p className='text-[#363247] nunito-400 text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px]'>Fill the form below to get notified once a ride becomes available in your route</p>
            </div>

            <div className='flex flex-col gap-[24px]'>
                <input className='border border-[#54697E] p-[8px] rounded-[4px] focus:outline-none nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#363247] bg-inherit'
                    type='text'
                    placeholder='Where are you?'
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                />
                <input className='border border-[#54697E] p-[8px] rounded-[4px] focus:outline-none nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#363247] bg-inherit'
                    type='text'
                    placeholder='Where are you going to'
                    value={goingTo}
                    onChange={(e) => setGoingTo(e.target.value)}
                />
                <input className='border border-[#54697E] p-[8px] rounded-[4px] focus:outline-none nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#363247] bg-inherit'
                    type='number'
                    placeholder='Your phone number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <input className='border border-[#54697E] p-[8px] rounded-[4px] focus:outline-none nunito-400 text-[18px] leading-[24.55px] md:text-[20px] md:leading-[27.28px] text-[#363247] bg-inherit'
                    type='email'
                    placeholder='Your email address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className='bg-[#5810BF] w-full h-[49px] rounded-[4px] p-[8px] text-center place-content-center'>
                <a className='text-[#F5F5F5] nunito-400 text-[24px] leading-[32.74px]'>Get Notified</a>
            </div>
        </div>
    </div>
  )
}

export default HailingForm