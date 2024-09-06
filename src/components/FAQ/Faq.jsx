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
                <div key={data.id} className='md:w-[1240px] md:h-[70px] p-[8px] flex flex-col items-center justify-between gap-[10px] border-b border-[#939294]'>

                    <div className='flex items-center'>
                        <p className='md:w-[1190px] md:h-[27px] md:font-bold text-[20px] leading-[27.28px] text-[#363247]'>{data.question}</p>

                        <div className='md:w-[24px] md:h-[24px] flex items-center justify-center'>
                            {
                                data.checked ? <IoIosArrowDown className='md:w-[20px] md:h-[20px] text-[#2F3435] cursor-pointer' onClick={() => handleShowAnswer(data.id)}/> : <IoIosArrowUp className='md:w-[20px] md:h-[20px] text-[#2F3435] cursor-pointer' onClick={() => handleShowAnswer(data.id)}/>
                            }         
                        </div>
                    </div>

                    <div className={data.checked ? 'hidden' : 'md:w-[1224px] md:h-[27px]'}>
                        <p className='md:text-[20px] leading-[27.28px] text-[#363247]'>{data.answer}</p>
                    </div>
                </div>
            )
        })
    }

  return (
    <div className='md:mt-[100px] md:w-[1240px] md:h-[481px] md:mx-[100px] flex flex-col items-center justify-between'>
        <div className='md:w-[526px] md:h-[55px]'>
            <p className='text-[#070125] font-bold md:text-[40px] md:leading-[54.56px]'>Frequently Asked Questions</p>      
        </div>

        <div className='md:w-[1240px]'>
            <DisplayFaq />
        </div>

    </div>
  )
}

export default Faq