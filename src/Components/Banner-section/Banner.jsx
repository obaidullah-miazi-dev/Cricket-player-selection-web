import React from 'react';
import BannerImg from '../../assets/banner-main.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="mt-6 mx-3 md:w-11/12 md:mx-auto bg-black py-20 space-y-8 dark:text-white text-center rounded-xl bg-gradient">
           <img className='mx-auto' src={BannerImg} alt="" /> 
           <h1 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
           <p className='text-2xl dark:text-gray-300 text-gray-600'>Beyond Boundaries Beyond Limits</p>
          <div className='border-2 border-[#E7FE29] p-2 inline-block rounded-xl cursor-pointer'>
             <button className='bg-[#E7FE29] text-black px-4 md:px-10 py-3 rounded-lg font-semibold cursor-pointer'>Claim Free Credit</button>
          </div>
        </div>
    );
};

export default Banner;