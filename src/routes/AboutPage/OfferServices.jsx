import React from 'react'
import OfferServiceImage from './OfferServiceImage'

const OfferServices = () => {
  return (
    <div>
        {/* MOBBILE SCREN DISPLAY */}
        <div className='flex flex-col gap-[20px] md:hidden'>

        <div className='flex flex-col gap-[16px] p-[8px]'>

            <div className='flex items-center gap-[8px]'>
                <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
                <p className='nunito-700 text-[24px] leading-[32.74px] text-[#BF5B12]'>OUR SERVICES</p>
            </div>

            <p className='nunito-700 text-[20px] leading-[27.28px] text-[#070125]'>Services Offered</p>

            <p className='text-[20px] nunito-400 text-[#363247] leading-[27.28px]'>CRida offers a comprehensive range of transportation services designed to meet the diverse needs of our customers. From car rentals to bus rentals, self-drive options to adapted automobiles, we provide convenient and reliable solutions for every travel occasion. Our fleet of well-maintained vehicles ensures comfort and safety, while our user-friendly booking platform makes the reservation process seamless and hassle-free. Whether you're traveling solo, with family, or in a group, CRida has the perfect transportation solution for you. Experience the convenience, reliability, and comfort of CRida's services and discover a new way to travel.</p>
        </div>

        <div>
            <OfferServiceImage/>
        </div>

        </div>

        {/* LARGE SCREEN DISPLAY */}
        <div className='md:flex items-center gap-[120px] hidden'>

            <div>
                <OfferServiceImage/>
            </div>

            <div className='flex flex-col gap-[16px] p-[8px]'>

                <div className='flex flex-col gap-[16px]'>

                    <div className='flex items-center gap-[8px]'>
                        <div className='w-[60px] border-[3px] border-[#BF5B12]'></div>
                        <p className='text-[24px] nunito-400 leading-[32.74px] text-[#BF5B12]'>OUR SERVICES</p>
                    </div>

                    <p className='nunito-700 text-[40px] leading-[54.56px] text-[#070125]'>Services Offered</p>

                    <p className='text-[20px] nunito-400 text-[#363247] leading-[27.28px]'>CRida offers a comprehensive range of transportation services designed to meet the diverse needs of our customers. From car rentals to bus rentals, self-drive options to adapted automobiles, we provide convenient and reliable solutions for every travel occasion. Our fleet of well-maintained vehicles ensures comfort and safety, while our user-friendly booking platform makes the reservation process seamless and hassle-free. Whether you're traveling solo, with family, or in a group, CRida has the perfect transportation solution for you. Experience the convenience, reliability, and comfort of CRida's services and discover a new way to travel.</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default OfferServices