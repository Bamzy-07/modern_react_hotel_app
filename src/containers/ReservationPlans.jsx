import React from 'react';

import styles from '../style';
import {Discount} from '../components';
import { BsArrowRight } from "react-icons/bs";
import {promo01, promo02,love,tag} from '../assets';

const ReservationPlans = () => {

  const current = new Date();

  return (
    <div className='flex flex-col pb-16 gap-16' id='plans'>
      <h1 className={`${styles.heading2}`}>Package Deals</h1>
      <div className='flex flex-row flex-wrap justify-center gap-6'>
        <div className='p-6 flex flex-col items-center bg-stone-800 hover:skew-x-6 transition ease-in duration-300'>
          <div className='flex gap-4'>
            <img src={love} alt='love' className='w-12 -rotate-45' />
            <img src={tag} alt='smile' className='w-12' />
          </div>
          <h1 className='font-serif font-semibold text-center pb-4 text-white text-[18px] md:text-[20px] tracking-wide'>BOOK <span className='font-mono tracking-wider font-normal'><br />YOUR ROMANTIC</span><br />GET-AWAY</h1>
          <p className='font-poppins font-normal text-center text-primary text-[16px] md:text-[18px] tracking-wide'>At Exclusive offers</p>
        </div>
        <div className='p-6 flex flex-col items-center bg-orange-200 hover:skew-x-6 transition ease-in duration-300'>
          <h1 className='font-serif font-semibold text-center pb-4 text-stone-800 text-[18px] md:text-[20px] tracking-wide uppercase'>Participate in major events</h1>
          <p className='font-poppins font-normal text-center pb-4 text-stone-800 text-[16px] md:text-[18px] tracking-wide'>In {current.getFullYear()}, we feature four major enjoyable &<br /> luxurious events including sports tournaments </p>
          <button className='p-4 flex items-center gap-2 border-2 border-stone-800 font-semibold font-serif uppercase text-[18px] hover:bg-stone-800 hover:text-orange-200 transition ease-in duration-300'>Go To Events<BsArrowRight size={27} /></button>
        </div>
        <div className='p-6 flex flex-col items-center bg-stone-900 hover:skew-x-6 transition ease-in duration-300'>
          <h1 className='font-serif font-semibold text-center pb-4 text-white text-[35px] tracking-wide uppercase'>Art Exhibition &<br /> Summer in Arctic Gallery</h1>
          <p className='font-poppins font-normal pb-4 text-white text-[18px] tracking-wide'>Unleash your inner art enthusiast at Nyx Grand Hotel!<br /> We're thrilled to host a captivating exhibition showcasing works by local artists, <br /> followed by an exclusive gallery show featuring established talents. </p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        <Discount background={promo01} promo='50%' text1='Get Extra Discount at' text2='Nyx Grand Hotel'/>
        <Discount background={promo02} promo='75%' text1='Exclusive Deals' text2='Just For You'/>
      </div>
      

    </div>
  )
}

export default ReservationPlans