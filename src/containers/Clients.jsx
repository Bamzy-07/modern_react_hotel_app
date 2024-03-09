import React from 'react';

import {clients} from '../constants';

const Clients = () => {
  return (
    <div className='flex flex-wrap items-center justify-between'>
      {
        clients.map((client) => (
       <img  key={client.id} src={client.logo} alt='client-icon' className='w-[100px] sm:w-[150px]' />
        ))
      }
    </div>
  )
}

export default Clients