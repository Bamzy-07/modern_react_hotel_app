import React from 'react';

import { FeatureCard } from '../components';
import { GiChainedArrowHeads } from "react-icons/gi";
import {facilities} from '../constants';
import styles from '../style';

const Facilities = () => {
  return (
    <div className='flex flex-col gap-16  py-16'>
      <div>
        <h1 className={`${styles.heading2} items-center flex`}><GiChainedArrowHeads color={'#FB923C'} className=' w-24 -rotate-45' />Facilities</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2'>
        {
          facilities.map((facility, index) => (
            <FeatureCard key={facility.id} {...facility} index={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Facilities