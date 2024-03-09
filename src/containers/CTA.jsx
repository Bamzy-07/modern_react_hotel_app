import React from 'react';

import styles from '../style';

const CTA = () => {
  return (
    <div className='p-8 my-16 w-full flex flex-col gap-1 md:gap-4 items-center text-center rounded-[50px] gradient'>
      <h1 className='select-none font-poppins font-bold text-white text-2xl md:text-6xl tracking-wider leading-10'>Ready for the Best vacation in a luxurious Hotel</h1>
      <p className='font-poppins font-semibold text-white text-[18px] md:text-[20px] tracking-wider'>We always choose you 😊</p>
      <button className='py-4 px-16 font-serif font-semibold text-white text-[18px] md:text-[25px] border-2 border-primary rounded-full bg-primary hover:bg-dimGlass hover:text-primary hover:scale-105 hover:border-white transition ease-in duration-500'>Contact Us</button>

    </div>
  )
}

export default CTA