import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='md:w-11/12 md:mx-auto mx-3 dark:border-white border-gray-200 border-2 rounded-xl p-6 mt-16 bg-[#c5c5c50a]'>
            <div className='text-center bg-gradient rounded-xl py-20 space-y-4'>
                <h1 className='font-bold text-4xl'>Subscribe to our Newsletter</h1>
                <p className='font-medium text-xl text-gray-600'>Get the latest updates and news right in your inbox!</p>
                <input className='text-gray-700 border-1 border-gray-200 rounded-xl py-2.5 px-4 mr-2 md:w-[400px]' type="email" placeholder='Enter your email' />
                <button className='py-2.5 px-5 bg-gradient-to-r from-[#e66791] to-[#ffcf68] rounded-xl font-semibold'>Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;