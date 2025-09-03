import article2Image from '@/assets/article-2.png';
import article3Image from '@/assets/article-3.png';
import { useSearchQuery } from '@/context/search/Context';
import classNames from 'classnames';
import type { ReactElement } from 'react';
import H2 from '../elements/H2';
import MainContainer from '../elements/MainContainer';

function TopOfTheDay(): ReactElement {
  const { searchQuery } = useSearchQuery();

  return (
    <section
      className={classNames('mt-8  lg:mt-12', {
        hidden: searchQuery.length > 0,
      })}
    >
      <MainContainer>
        <hr className='border-t border-[#C4C4C4]' />
        <p className='font-bold  text-[#91A0B6]  mt-2.5'>TOP OF THE DAY</p>
        <div className='mt-5  lg:gap-8  lg:flex  lg:justify-between'>
          <div>
            <img className='rounded-2xl' src={article2Image} alt='Article 2' />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Professional Repot</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Repotting a plant can seem like a difficult task because a lot
                  of things can go wrong – you can damage...
                </p>
              </div>
            </div>
          </div>
          <div className='mt-8  lg:mt-0'>
            <img className='rounded-2xl' src={article3Image} alt='Article 3' />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Professional Repot</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Repotting a plant can seem like a difficult task because a lot
                  of things can go wrong – you can damage...
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default TopOfTheDay;
