import React from 'react';

const FeatureCard = (props) => {
  return (
    <div className='relative flex flex-col items-center bg-dimBlack rounded-xl hover:scale-105 py-12 md:py-40 px-8 transition ease-in duration-500'>
      <img src={props.pic} alt='background' className='absolute object-cover left-0 top-0 h-full rounded-xl -z-[1]' />
      <img src={props.icon} alt='icon' className='w-16 pb-28 md:pb-40' />

      <div className='flex flex-col gap-12 items-center text-center'>
        <h1 className='select-none font-serif font-semibold text-white text-[35px] leading-[66.8px] w-full'>{props.title}</h1>
        <p className='font-poppins font-semibold text-white hover:text-primary text-[18px] leading-[30.8px]'>{props.text}</p>
        <button className='font-poppins font-semibold px-6 py-4 mt-8 rounded-full text-[18px] uppercase text-white bg-primary border-2 hover:scale-110 transition ease-in duration-500'>Explore More</button>
      </div>

    </div>
  )
}

export default FeatureCard