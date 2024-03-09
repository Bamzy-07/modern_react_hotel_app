import React from 'react';

import {navLinks} from '../constants';
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import styles from '../style'

const Footer = () => {
  return (
    <div className='bg-black p-16 flex flex-col gap-8'>
      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-12 sm:justify-between'>
        <div className='flex flex-col gap-4'>
          <h1 className={`${styles.heading2}`}>NYX GRAND HOTEL</h1>
          <p className='font-poppins text-center sm:text-left font-normal text-[16px] text-dimWhite tracking-wide'>Spend your vacation with us, <br />enjoy, relax and let's treat you right</p>
        </div>
        <div className='flex flex-col gap-8'>
          <h1 className='select-none font-poppins font-semibold text-[18px] text-white tracking-wide'>COMPANY</h1>
          {
            navLinks.map((navLink)=>(
              <a key={navLink.id} className='font-poppins text-center sm:text-left font-normal cursor-pointer text-[16px] text-dimWhite hover:text-primary tracking-wide'>{navLink.title}</a>
            ))
          }

        </div>
        <div className='flex flex-col text-center sm:text-left gap-8'>
          <h1 className='select-none font-poppins font-semibold text-[18px] text-white tracking-wide'>SUPPORT</h1>
          <a className='font-poppins font-normal text-[16px] text-dimWhite hover:text-primary tracking-wide cursor-pointer'>Contact Us</a>
          <a className='font-poppins font-normal text-[16px] text-dimWhite hover:text-primary tracking-wide cursor-pointer'>Documentation</a>
          <a className='font-poppins font-normal text-[16px] text-dimWhite hover:text-primary tracking-wide cursor-pointer'>Community</a>
        </div>
        <div className='flex flex-col gap-8'>
          <h1 className='select-none font-poppins font-semibold text-[18px] text-white tracking-wide'>SOCIALS</h1>
          <div className='flex gap-4'>
            <FaFacebook size={27} className='cursor-pointer fill-primary hover:fill-dimWhite' />
            <BsInstagram size={27} className='cursor-pointer fill-primary hover:fill-dimWhite' />
          </div>
        </div>       
      </div>

      <hr className='w-full h-[1px] border-none bg-dimWhite' />
          
      <div className='flex flex-wrap gap-8 justify-between'>
        <div className='flex flex-col gap-4'>
        <h1 className='select-none font-poppins font-semibold text-[18px] text-white tracking-wide'>Subscribe to Our Newsletter</h1>
        <p className='font-poppins font-normal text-[16px] text-dimWhite tracking-wide'>The latest news,articles and exclusive offers sent to your inbox directly</p>
        </div>
        <div className='flex flex-wrap items-center'>
          <input type='text' placeholder='Enter Your Email' className='py-2 px-4 font-poppins font-normal text-[16px] text-dimWhite tracking-wide'/>
          <button className='select-none py-2 px-4 font-poppins font-semibold text-[18px] text-white hover:text-primary bg-primary hover:bg-transparent border-2 border-primary transition ease-in duration-500 tracking-wide'>SUBSCRIBE</button>
        </div>
      </div>

      <hr className='w-full h-[1px] border-none bg-dimWhite' />

      <div>
          <p className='font-poppins font-normal text-[16px] text-dimWhite tracking-wide'>&copy; Copyright 2024- Nova Technologies</p>
      </div>
   
    </div>
  )
}

export default Footer