import React from 'react';

import styles from '../style';
import { Header,Hero,Rooms, Facilities,ReservationPlans,Images, Testimonials,CTA,Clients } from '../containers';

const Home = () => (
  
    <div>
        <Header />

        <div className={`${styles.padding}`}>
        <Hero />
        <Rooms />
        <Facilities />
        <ReservationPlans />
        <Images />
        <Testimonials />
        <CTA />
        <Clients />  
        </div>
    </div>
  
);

export default Home