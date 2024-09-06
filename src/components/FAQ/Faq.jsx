import React, { useState } from 'react'
import FaqData from '../../data/FAQ'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {  } from 'react-icons/io';

const Faq = () => {
    const [faqquest, setFaqquest] = useState(FaqData);
    const [showAnswer, setShowAnswer] = useState(true);

    const handleShowAnswer = (id) => {
        const showID = faqquest.map((data) => (data.id) === id ? {...data, checked: !data.checked} : data);
        return setFaqquest(showID);
    }

    const DisplayFaq = () => {
        return faqquest.map((data) => {
            return (
                <div>
                    <div key={data.id} className='md:w-[1240px] md:h-[86px] p-[8px] flex flex-col md:gap-0 items-center justify-end border-b border-[#939294]'>

                        <div className='flex md:items-center justify-between w-[368px] h-[70px] md:w-[1224px] md:h-[43px] p-[8px] gap-[10px]'>
                            <p className='w-[326px] h-[27px] md:w-[1191px] md:h-[27px] md:font-bold text-[20px] leading-[27.28px] text-[#363247]'>{data.question}</p>

                            <div className='md:w-[24px] md:h-[24px] flex items-center justify-center'>
                                {
                                    data.checked ? <IoIosArrowDown className='md:w-[20px] md:h-[20px] text-[#2F3435] cursor-pointer' onClick={() => handleShowAnswer(data.id)}/> : <IoIosArrowUp className='md:w-[20px] md:h-[20px] text-[#2F3435] cursor-pointer' onClick={() => handleShowAnswer(data.id)}/>
                                }         
                            </div>
                        </div>

                        <div className={data.checked ? 'hidden' : 'w-[368px] h-[50px] md:w-[1224px] md:h-[27px] flex md:items-center gap-[10px] p-[8px]'}>
                            <p className='text-[20px] leading-[27.28px] text-[#313036]'>{data.answer}</p>
                        </div>
                    </div>

                </div>
               
                
            )
        })
    }

  return (
    <div className='mt-[50px] mx-[30px] md:mt-[100px] md:w-[1240px] md:h-[481px] md:mx-[100px] flex flex-col gap-[20px] md:gap-0 items-center'>
        <div className='w-[305px] h-[33px] md:w-[526px] md:h-[55px]'>
            <p className='text-[#070125] font-normal text-[24px] leading-[32.74px] md:font-bold md:text-[40px] md:leading-[54.56px]'>Frequently Asked Questions</p>      
        </div>

        <div className='md:w-[1240px]'>
            <DisplayFaq />
        </div>

    </div>
  )
}

export default Faq