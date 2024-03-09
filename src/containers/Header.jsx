import {useState,React} from 'react';

import {Navbar } from '../components';
import { BsArrowRight } from "react-icons/bs";
import rocket from '../assets/rocket.png';


const header = () => {
  const [rooms, setRooms] = useState('');
  const [person, setPerson] = useState('');

  function handleRooms(event){
    setRooms(event.target.value);
  }

  function handlePerson(event){
    setPerson(event.target.value);
  }

  return (
    <div className='max-w-full background ' id='home'>
       
      <Navbar />

      <div className='py-[250px] flex flex-col gap-20 items-center justify-center sm:px-16'>
        <div className='flex flex-col gap-6 text-center items-center'> 
          <div className='flex gap-4'>
          <p className='font-poppins text-[20px] font-normal text-white tracking-wider'>It's time for a vacation</p>
          <img src={rocket} alt='rocket' className='w-6' />
          </div>
          <h1 className='select-none font-bold font-poppins text-white text-3xl xs:leading-[76.8px] leading-[66.8px] tracking-wider sm:text-5xl md:text-6xl lg:text-7xl'>Discover The Best Hotel <br /> In The World</h1>
          <p className='font-poppins text-[20px] font-normal text-white tracking-wider'>When you travel, Choose us and enjoy the best facilities including pools, spa rooms and many more <br/> We choose you always.</p>
        </div>

        <div className=' p-4 rounded-3xl bg-white flex flex-col gap-6 '>
          <div className='flex flex-row gap-16'>
            <label className='font-poppins font-semibold text-[20px] text-black'><input type='radio' value='Day Inn' />Day Inn</label>
            <label className='font-poppins font-semibold text-[20px] text-black'><input type='radio' value='Night Lodging' />Night Lodging</label>
            
          </div>
            <div className='flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6'>
            <input type='date' className='w-[200px] bg-transparent py-4 text-black tracking-wider hover:text-dimBlack font-poppins text-[16px] border-b-2 border-white cursor-pointer'></input>
            <select value={rooms} onChange={handleRooms} className='w-[200px] bg-transparent py-4 text-black tracking-wider hover:text-dimBlack font-poppins text-[16px] border-b-2 border-white cursor-pointer'>
              <option value=''>Rooms</option>
              <option value='CozyComfort'>Cozy Comfort</option>
              <option value='Executive'>Executive</option>
              <option value='Superior'>Superior</option>
              <option value='JuniorSuite'>Junior Suite</option>
              <option value='ExecutiveSuite'>Executive Suite</option>
            </select>

            <select value={person} onChange={handlePerson} className='w-[200px] py-4 bg-transparent text-black tracking-wider hover:text-dimBlack font-poppins text-[16px] border-b-2 border-white cursor-pointer'>
              <option vlaue=''>Number of Guests</option>
              <option vlaue='1'>1</option>
              <option vlaue='2'>2</option>
              <option vlaue='3orMore'>3 or More</option>

            </select>
            <button className='flex gap-3 items-center py-3 px-6 font-serif font-semibold uppercase text-white text-[20px] tracking-wider border-2 border-primary bg-primary hover:bg-transparent hover:text-primary transition ease-in-out duration-500  cursor-pointer' >Book A Stay <BsArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default header