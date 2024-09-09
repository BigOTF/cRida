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
                <div key={data.id} className='p-[8px] flex flex-col gap-[8px] md:gap-[10px] border-b border-[#939294]'>

                    <div className='flex items-center justify-between gap-[8px] md:gap-[10px]'>
                        <p className='md:nunito-700 nunito-400 text-[20px] leading-[27.28px] text-[#363247]'>{data.question}</p>

                        <div>
                            {
                                data.checked ? <IoIosArrowDown className='text-[25px] text-[#2F3435] cursor-pointer' onClick={() => handleShowAnswer(data.id)}/> : <IoIosArrowUp className='text-[25px] text-[#2F3435] cursor-pointer' onClick={() => handleShowAnswer(data.id)}/>
                            }         
                        </div>
                    </div>

                    <div className={data.checked ? 'hidden' : 'flex md:items-center'}>
                        <p className='text-[20px] nunito-400 leading-[27.28px] text-[#313036]'>{data.answer}</p>
                    </div>
                </div>            
            )
        })
    }

  return (
    <div className='mt-[50px] w-full md:mt-[100px] flex flex-col gap-[20px] md:gap-[30px]'>

        <div className='flex items-center justify-center'>
            <p className='text-[#070125] nunito-400 text-[24px] leading-[32.74px] md:nunito-700 md:text-[40px] md:leading-[54.56px]'>Frequently Asked Questions</p>      
        </div>

        <div className='md:mx-[100px] flex flex-col gap-[25px] mx-[10px]'>
            <DisplayFaq />
        </div>

    </div>
  )
}

export default Faq