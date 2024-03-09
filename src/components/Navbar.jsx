import {useState,React} from 'react';

import { navLinks } from '../constants';
import styles from '../style';
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={` ${styles.paddingX} fixed z-[1] border-b-2 border-white w-full grid grid-cols-3 items-center py-8 ${toggle ? 'bg-black' : 'bg-dimBlack'}`}>
      <div className='flex'>
        
        {toggle 
        ? < IoMdClose size={27}  className='fill-white hover:fill-primary z-20 cursor-pointer' onClick={() => setToggle(false)} /> 
        : < CiMenuFries size={27}  className='fill-white hover:fill-primary z-20 cursor-pointer' onClick={() => setToggle(true)} /> } 

        <h1 className='hidden sm:flex text-white text-[16px] sm:text-[18px] font-serif font-normal tracking-wider hover:text-dimWhite ml-2 z-20'>MENU</h1>

        <div className={`flex p-6 fixed top-0 left-0 h-full w-[350px] z-10 bg-black justify-center items-center transition ease-out duration-500 ${toggle ? 'translate-x-0' : 'translate-x-[-100%]'} `}>
	          <ul className='flex flex-col justify-center w-full p-12'>
	            {
	              navLinks.map((nav,index) => (
	                <li key={nav.id} className={`cursor-pointer mb-10 font-poppins font-bold text-white hover:text-primary text-[18px] uppercase border-b-2 text-start border-white w-full hover:text-dimWhite transition ease-out duration-500 `}>
	                  <a href={`#${nav.id}`}>
	                    {nav.title}
	                  </a>
	                </li>
                ))
	            }
	          </ul>
	        </div>
      </div>

	    <div className='flex justify-center'>
        <h1 className='text-white text-[18px] sm:text-[20px] font-serif font-bold tracking-widest uppercase cursor-pointer'>Nyx Hotel</h1>
      </div>

      <div className='flex items-center gap-6 justify-end'>
        <div className='hidden md:flex gap-6'>
          <p className='font-poppins font-normal text-[18px] text-white cursor-pointer hover:text-dimWhite' >(+233)-540-244-252</p>
	        <FaFacebook size={27} className='cursor-pointer fill-primary hover:fill-dimWhite' />
          <BsInstagram size={27} className='cursor-pointer fill-primary hover:fill-dimWhite' />
        </div>

	      <a className=' font-serif font-normal text-[16px] sm:text-[18px] tracking-wider text-white uppercase px-6 border-l-2 border-white cursor-pointer hover:text-dimWhite'>Book Now</a>
	     </div>

	    

    </nav>
  )
}

export default Navbar