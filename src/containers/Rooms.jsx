import {useState,React} from 'react';

import styles from '../style';
import {rooms} from '../constants';
import { FaRegStar } from "react-icons/fa";
import { GiChainedArrowHeads } from "react-icons/gi";

import {room01} from '../assets';

const Rooms = () => {
  const [input, setInput]=useState({
    image: room01,
    text: 'Cozy Comfort',
    rating: '4.8 (1,450 reviews)',
    price: 700
  });

  const handleClick = (props) => {
    setInput(c=>({text:props.text,
                  image:props.img, 
                  rating:props.rating, 
                  price:props.price}))
  }


  return (
   <div className='flex flex-col gap-6'>
      <p className={`flex items-center ${styles.heading2}`}><GiChainedArrowHeads color={'FB923C'} className='w-24 -rotate-45' />Hotel Rooms</p>

      <div className='flex flex-col-reverse md:grid grid-cols-2 gap-1 lg:gap-12 xl:gap-32'>
        <div className='flex items-center flex-col'>
          <div className='grid grid-cols-2 grid-flow-row sm:grid-cols-3 md:grid-rows-5 md:grid-cols-none pt-12 pb-32 gap-5'>
            {
              rooms.map((room)=>(
                <p key={room.id} className={` select-none font-poppins font-semibold cursor-pointer text-orange-300 py-2 hover:text-primary hover:-translate-y-3 md:hover:translate-x-16 transition ease-in duration-500 text-[25px]`} onMouseEnter={() => handleClick(room)} >
                  {room.text}</p>
              ))
            }
          </div>
          <div className='flex flex-col items-center gap-12'>
            <p className={`${styles.paragraph} text-justify`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nam dolores, illum maxime pariatur 
              iste nisi nihil illo assumenda architecto? Natus mollitia tenetur illo sit doloremque adipisci repellendus aliquid aliquam.</p>

              <button className='flex justify-center w-72 py-4 px-4 text-white font-poppins font-semibold bg-primary border-2 hover:border-primary hover:bg-transparent hover:scale-110 hover:text-orange-400 transition ease-in duration-500'>BOOK A ROOM</button>
          </div>
        </div>

        <div className=' relative flex flex-col-reverse md:flex-col items-center md:items-start gap-6 max-w-[650px] h-[450px] ml-0 lg:ml-12 mt-12'>
          <img src={input.image} alt='room' className=' object-cover h-full' />
          <div className='absolute top-0 left-0 md:top-52 md:-left-36 flex flex-col  gap-2 bg-[rgba(156,163,175,0.5)] border-4 border-black py-2 md:py-4 px-6'>
          <p className='font-serif font-semibold text-black text-[18px] md:text-[25px] leading-[30.8px]'>${input.price} <span className='text-[18px] text-black'>PER ROOM</span></p>
          <hr className='w-full h-1 border-0 bg-primary' />
          <p className='font-serif font-semibold md:pt-4 text-black text-[18px]  md:text-[25px] leading-[30.8px]'>{input.text}</p>
          <p className='flex gap-2 items-center font-poppins font-semibold text-gray-700 text-[17px] md:text-[22px] leading-[30.8px]'><FaRegStar />{input.rating}</p>
          
          </div>
          
        </div>
      
      </div>

    </div>
    
  )
}

export default Rooms