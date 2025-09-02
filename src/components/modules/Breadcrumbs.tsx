import type { ReactElement } from 'react';
import BreadcrumbSeparator from '../elements/BreadcrumbSeparator';
import MainContainer from '../elements/MainContainer';

function Breadcrumbs(): ReactElement {
  return (
    <nav>
      <MainContainer className='mt-4'>
        <ol className='flex  items-center  gap-2.5'>
          <li className='lg:hidden'>
            <BreadcrumbSeparator />
          </li>
          <li className='text-gray  font-medium  cursor-pointer'>Home</li>
          <li className='hidden  lg:block'>
            <BreadcrumbSeparator className='rotate-180' />
          </li>
          <li className='text-gray  font-medium  hidden  lg:block'>Blog</li>
        </ol>
      </MainContainer>
    </nav>
  );
}

export default Breadcrumbs;
