import React from 'react';

import styles from '../style';
import {spa01,gym01,lounge01,pool04,spa05,gym02,pool03,res02,lounge04} from '../assets';
import { GiChainedArrowHeads } from "react-icons/gi";

const Images = () => {

  return (
    <div className='images__bg flex flex-col pb-16 gap-16' id='gallery'>
      <h1 className={`flex items-center ${styles.heading2}`}><GiChainedArrowHeads color={'FB923C'} className='w-24 -rotate-45' />Gallery</h1>
      <p className='flex justify-center mx-10 lg:mx-[30rem] font-poppins font-semibold text-black text-[18px] tracking-wide '>
       Peek inside our luxurious suites and imagine sinking into plush comfort after a day of exploration.<br />
      Ignite your love story in our intimate spaces designed for romance.</p>
      <div className='flex items-center py-8 justify-center gap-4 '>

          <div className='relative hidden mg:block w-[100px] h-[300px] hover:w-[600px] md:hover:w-[500px] hover:h-[300px] transition ease-in-out duration-500'>
            <img src={spa01} alt='spa' className='w-full h-full object-cover rounded-[25px]' />
          </div>

          <div className='relative hidden mg:block w-[100px] h-[400px] hover:w-[600px] md:hover:w-[500px] hover:h-[400px] transition ease-in-out duration-500'>
            <img src={gym01} alt='spa' className='w-full h-full object-cover rounded-[25px]' />
          </div>

          <div className='relative w-[100px] h-[500px] hover:w-[600px] md:hover:w-[500px] hover:h-[350px] md:hover:h-[500px] transition ease-in-out duration-500'>
            <img src={lounge01} alt='spa' className='w-full h-full object-cover rounded-[25px]' />
          </div>

          <div className='relative w-[100px] h-[600px] hover:w-[600px] md:hover:w-[500px] hover:h-[350px] md:hover:h-[600px] transition ease-in-out duration-500'>
            <img src={pool04} alt='spa' className='w-full h-full object-cover rounded-[25px]' />
          </div>

          <div className='relative w-[100px] h-[700px] hover:w-[600px] md:hover:w-[500px] hover:h-[350px] md:hover:h-[700px] transition ease-in-out duration-500'>
            <img src={res02} alt='spa' className='w-full h-full object-cover rounded-[25px]' />
          </div>

          <div className='relative w-[100px] h-[600px] hover:w-[600px] md:hover:w-[500px] hover:h-[350px] md:hover:h-[600px] transition ease-in-out duration-500'>
            <img src={gym02} alt='spa' className='w-full h-full object-cover rounded-[25px]' /> 
          </div>

          <div className='relative w-[100px] h-[500px] hover:w-[600px] md:hover:w-[500px] hover:h-[350px] md:h[500px] transition ease-in-out duration-500'>
            <img src={pool03} alt='spa' className='w-full h-full object-cover rounded-[25px]' />
          </div>

          <div className='relative hidden mg:block w-[100px] h-[400px] hover:w-[600px] md:hover:w-[500px] hover:h-[400px] transition ease-in-out duration-500'>
            <img src={spa05} alt='spa' className='w-full h-full object-cover rounded-[25px]' /> 
          </div>

          <div className='relative hidden mg:block w-[100px] h-[300px] hover:w-[600px] md:hover:w-[500px] hover:h-[300px] transition ease-in-out duration-500'>
            <img src={lounge04} alt='spa' className='w-full h-full object-cover rounded-[25px]' />
          </div>
      </div>
    </div>
  )
}

export default Images