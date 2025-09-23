import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='md:relative md:top-60 md:w-11/12 md:mx-auto mx-3 dark:border-white border-gray-200 border-2 rounded-xl p-6 bg-[#c5c5c50a]'>
            <div className='text-center bg-gradient rounded-xl py-20 space-y-4'>
                <h1 className='font-bold text-4xl px-3 md:px-0'>Subscribe to our Newsletter</h1>
                <p className='font-medium text-xl px-3 md:px-0 text-gray-600'>Get the latest updates and news right in your inbox!</p>
                <div className='px-3 space-y-2'>
                    <input className='text-gray-700 border-1 border-gray-200 rounded-xl py-2.5 px-4 md:mr-2 md:w-[400px] w-full' type="email" placeholder='Enter your email' />
                    <button className='py-2.5 px-5 bg-gradient-to-r from-[#e66791] to-[#ffcf68] rounded-xl font-semibold w-full md:w-30'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;