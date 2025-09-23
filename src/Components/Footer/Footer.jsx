import React from 'react';
import FooterLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='bg-black text-white pt-16'>
            <div className='mb-16'>
                <img className='mx-auto' src={FooterLogo} alt="" />
            </div>

            <div className='md:grid grid-cols-3 md:w-11/12 mx-auto'>

                <div className='mx-auto'>
                    <h3 className='font-bold text-lg mb-2'>About Us</h3>
                    <p>
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </div>

                <div className='mx-auto'>
                    <h3 className='font-bold text-lg mb-2'>Quick Links</h3>
                    <p>Home</p>
                    <p>Services</p>
                    <p>About Us</p>
                    <p>Contact</p>
                </div>

                <div className='mx-auto'>
                    <h3 className='font-bold text-lg mb-2'>Subscribe</h3>
                    <p className='mb-2'>Subscribe to our newsletter for the latest updates.</p>
                    <div>
                        <input className='text-gray-700 bg-white rounded-xl md:rounded-r-none  py-2.5 px-4' type="email" placeholder='Enter Your Email'/>
                        <button className='py-2.5 px-5 bg-gradient-to-r from-[#e66791] to-[#ffcf68] rounded-xl font-semibold md:rounded-l-none'>Subscribe</button>
                    </div>
                </div>

            </div>

            <p className='text-center border-2 border-gray-800 p-2 mt-12'>@2025 Cricket All Rights Reserved.</p>
        </div>
    );
};

export default Footer;