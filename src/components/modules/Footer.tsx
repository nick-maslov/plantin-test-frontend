import type { ReactElement } from 'react';
import MainContainer from '../elements/MainContainer';

function Footer(): ReactElement {
  return (
    <footer
      className='transition-opacity  duration-300  mt-16  mb-7  lg:mt-24  lg:mb-20'
      id='footer'
    >
      <MainContainer className='sm:flex  sm:justify-between'>
        <ul
          className='flex  flex-col  items-center  gap-2  text-[#91A0B6]  
                     sm:flex-row  sm:gap-4  sm:items-start'
        >
          <li className='cursor-pointer'>Terms of Service</li>
          <li className='hidden  w-px  h-4  bg-[#A9B6C8]  self-center  sm:block'></li>
          <li className='cursor-pointer'>Privacy Policy</li>
          <li className='hidden  w-px  h-4  bg-[#A9B6C8]  self-center  sm:block'></li>
          <li className='cursor-pointer'>Subscription Policy</li>
        </ul>
        <p className='text-center  text-[#91A0B6]  mt-6  sm:text-left  sm:mt-0'>
          ©Copyright © 2025 PlantIn. <br className='lg:hidden' />
          All rights reserved
        </p>
      </MainContainer>
    </footer>
  );
}

export default Footer;
