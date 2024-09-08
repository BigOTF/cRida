import React, { useState, useEffect } from 'react'
import { BsGearFill, BsFillFuelPumpFill } from "react-icons/bs";
import { SiCoronaengine } from "react-icons/si";

const ExploreCars = () => {
    const [carProduct, setCarProduct] = useState([]);

    useEffect(() => {
        const UNSPLASH_ACCESS_KEY = 'fR9qSPhbNPim8XF61Mc4RLVL2eU9F5g_N7fne6p5a20';

        const fetchCarProducts = async() => {
            try {
                const response = await fetch('https://freetestapi.com/api/v1/cars');
                const data = await response.json();

                 // Fetch images for each car using Unsplash
                 const carsWithImages = await Promise.all(data.map(async (car) => {
                    try {
                        const imageResponse = await fetch(`https://api.unsplash.com/search/photos?query=${car.make}%20${car.model}&client_id=${UNSPLASH_ACCESS_KEY}`);
                        const imageData = await imageResponse.json();
                        
                        // Use the first image result if available, else use a placeholder
                        car.image = imageData.results[0]?.urls.small || 'https://placehold.co/400x264?text=No+Image';
                        return car;
                    } catch (error) {
                        console.error('Error fetching car images:', error);
                        car.image = 'https://placehold.co/400x264?text=No+Image'; // Fallback image
                        return car;
                    }
                }));
                return setCarProduct(carsWithImages);
            } catch(err) {
                console.log(err);
            }
        }
        fetchCarProducts();
    }, []);

    const CarProductDisplay = () => {
        return (
            
            carProduct.map((car) => {
                return (
                    <div key={car.id} className='flex flex-col gap-[16px] bg-white'>

                        <div>
                            <img src={car.image} className='w-full h-[250px] object-cover' />
                        </div>

                        <div className='flex flex-col p-[16px] gap-[12px] md:gap-[16px]'>

                            <div className='flex flex-col gap-[8px] md:gap-[10px]'>
                                <p className='nunito-700 text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px] text-[#070125]'>{car.make} <span>{car.model}</span></p>
                                <p className='text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px] text-[#070125] nunito-600'><span>&#36;</span>{car.price}/ day</p>

                                <div className='flex gap-[16px]'>
                                    <div className='flex flex-col items-center gap-[8px]'>
                                        <BsGearFill className='text-[#5810BF] w-[13.84px] h-[15.43px]' />
                                        <p className='text-[#363247] text-[16px] nunito-400 leading-[21.82px] text-center'>{car.transmission}</p>
                                    </div>
                                    <div className='flex flex-col items-center gap-[8px]'>
                                        <BsFillFuelPumpFill className='text-[#5810BF] md:w-[13.84px] md:h-[15.43px]' />
                                        <p className='text-[#363247] text-[16px] nunito-400 leading-[21.82px] text-center'>{car.fuelType}</p>
                                    </div>
                                    <div className='flex flex-col items-center gap-[8px]'>
                                        <SiCoronaengine className='text-[#5810BF] md:w-[13.84px] md:h-[15.43px]' />
                                        <p className='text-[#363247] text-[16px] nunito-400 leading-[21.82px] text-center'>{car.engine}</p>
                                    </div>
                                </div>

                            </div>

                            <div className='bg-[#5810BF] text-white hover:text-[#5810BF] hover:bg-white border hover:border-[#5810BF] rounded-[8px] p-[8px] transition-all duration-500 text-center'>
                                <a className='cursor-pointer nunito-400 text-[20px] leading-[27.28px] md:text-[24px] md:leading-[32.74px] text-center'>Book Now</a>
                            </div>
                        </div>
                    </div>
                )
            }).slice(0,6)
         
        )
    }

  return (
    <div className='grid grid-cols-1 gap-[14px] md:grid-cols-3 md:gap-[20px]'>
        <CarProductDisplay />
    </div>
  )
}

export default ExploreCars