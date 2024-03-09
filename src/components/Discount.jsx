import React from 'react';

import {discount} from '../assets';

const Discount = ({background,text1,text2, promo}) => {
  return (
    <div className={`relative p-4 bg-dimBlack flex justify-between rounded-xl`}>
        <img src={background} alt='background' className='absolute top-0 left-0 object-cover w-full h-full rounded-xl -z-[1]' />
        <div className='flex flex-col gap-2'>
            <img src={discount} alt='badge' className='w-12 rounded-full bg-primary p-2' />
            <p className='font-poppins font-normal text-white text-[18px] tracking-wide'>{text1}</p>
            <p className='font-poppins font-semibold text-white text-[18px] tracking-wide'>{text2}</p>
            <h1 className='font-poppins font-bold text-white text-[48px] tracking-wide pb-6'>{promo}</h1>
            <p className='font-poppins font-normal text-white text-[16px] tracking-wide'>*with Terms and Conditions</p>
        </div>

        <div>
            <p className='font-poppins font-normal text-white text-[16px] tracking-wide p-2 rounded-full bg-dimGlass'>Valid only on 14 March - 20 March 2024</p>
        </div>
    </div>
  )
}

export default Discount