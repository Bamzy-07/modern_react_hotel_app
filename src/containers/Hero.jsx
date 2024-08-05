import React from 'react';

import styles from '../style';
import { GiChainedArrowHeads } from "react-icons/gi";
import {nyx} from '../assets';

const Hero = () => {
  return (
    <div className='flex flex-col items-center pb-16' id='about'>
      <div className='pb-6'>
        <h1 className={`${styles.heading2} -ml-6 md:ml-0 items-center flex`}><GiChainedArrowHeads color={'#FB923C'} className='w-24 -rotate-45' />NYX</h1>
      </div>

      <div className='flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-16'>
        <div className=' flex-1 flex max-w-[800px] h-[500px] pt-12'>
          <img src ={nyx} alt='Nyx-Hotel' className='w-full h-full' />
        </div>

        <div className='flex-1 flex flex-col items-center'>
          <p className='font-poppins text-[20px] pb-6 text-black font-normal'>Since 1990</p>
          <h1 className='text-[35px] sm:text-[48px] text-black uppercase text-center font-serif font-semibold tracking-wider'>Stunning Switzerland <span className='text-gradient'>Landmark</span></h1>
          <p className={`${styles.paragraph} text-justify pt-16 sm:pt-20`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla incidunt accusantium quo temporibus! Eos eaque obcaecati reiciendis dolorem illo, 
            laudantium tempora consequuntur cupiditate sequi? Fugiat, asperiores! Exercitationem libero impedit atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorem dolores velit maxime dignissimos delectus culpa id similique quisquam praesentium odit! Laborum fugit excepturi voluptatum velit, 
            illum quibusdam error reiciendis nisi!</p>
            <button className='font-serif font-semibold uppercase px-6 py-4 mt-8 text-[16px] text-white bg-primary border-2 hover:text-primary hover:bg-transparent hover:border-primary hover:scale-110 transition ease-in duration-500'>Read More</button>
        </div>
      </div>

    </div>
  )
}

export default Hero