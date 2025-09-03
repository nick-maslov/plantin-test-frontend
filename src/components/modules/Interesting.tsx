import article4Image from '@/assets/article-4.png';
import article5Image from '@/assets/article-5.png';
import article6Image from '@/assets/article-6.png';
import saly from '@/assets/saly.png';
import { useSearchQuery } from '@/context/search/Context';
import classNames from 'classnames';
import type { ReactElement } from 'react';
import H2 from '../elements/H2';
import Logo from '../elements/Logo';
import MainContainer from '../elements/MainContainer';

function Interesting(): ReactElement {
  const { searchQuery } = useSearchQuery();

  return (
    <section
      className={classNames('mt-8  lg:mt-12', {
        hidden: searchQuery.length > 0,
      })}
    >
      <MainContainer>
        <hr className='border-t border-[#C4C4C4]' />
        <p className='font-bold  text-[#91A0B6]  mt-2.5'>INTERESTING</p>
        <ul className='mt-5  lg:grid  lg:grid-cols-3  lg:gap-x-8  lg:gap-y-12'>
          <li>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article4Image}
              alt='Article 4'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Watering mastery can seem like a&nbsp;tricky skill
                  to&nbsp;develop because a&nbsp;lot of&nbsp;things can go wrong
                  – you might overwater...
                </p>
              </div>
            </div>
          </li>
          <li className='mt-8  lg:mt-0'>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article5Image}
              alt='Article 5'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Watering mastery can seem like a&nbsp;tricky skill
                  to&nbsp;develop because a&nbsp;lot of&nbsp;things can go wrong
                  – you might overwater...
                </p>
              </div>
            </div>
          </li>
          <li className='mt-8  lg:mt-0'>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article6Image}
              alt='Article 6'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Watering mastery can seem like a&nbsp;tricky skill
                  to&nbsp;develop because a&nbsp;lot of&nbsp;things can go wrong
                  – you might overwater...
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div
          className='relative  mt-8  bg-green/[16%]  px-4  py-5  lg:hidden 
                     rounded-2xl'
        >
          <Logo className='mb-4' />
          <H2 className='text-green'>
            Get unlimited access to&nbsp;exclusive articles
          </H2>
          <p className='text-lg  font-medium  mt-2.5'>
            Get rid of&nbsp;limits and&nbsp;read everything you&nbsp;wish
          </p>
          <button
            className='w-full  mt-5  font-medium  bg-green  text-white  pt-2  
                       pb-2.5  text-center  rounded-lg  sm:w-40'
          >
            Try For Free
          </button>
        </div>
        <ul className='mt-10  lg:mt-12  lg:grid  lg:grid-cols-3  lg:gap-x-8  lg:gap-y-12'>
          <li>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article4Image}
              alt='Article 4'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Watering mastery can seem like a&nbsp;tricky skill
                  to&nbsp;develop because a&nbsp;lot of&nbsp;things can go wrong
                  – you might overwater...
                </p>
              </div>
            </div>
          </li>
          <li className='mt-8  lg:mt-0'>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article5Image}
              alt='Article 5'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Watering mastery can seem like a&nbsp;tricky skill
                  to&nbsp;develop because a&nbsp;lot of&nbsp;things can go wrong
                  – you might overwater...
                </p>
              </div>
            </div>
          </li>
          <li className='mt-8  lg:mt-0'>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article6Image}
              alt='Article 6'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Watering mastery can seem like a&nbsp;tricky skill
                  to&nbsp;develop because a&nbsp;lot of&nbsp;things can go wrong
                  – you might overwater...
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div
          className='relative  hidden  lg:block  [background:linear-gradient(90deg,#CFEDE6_7.49%,rgba(140,222,203,0.832667)_100%)]  pt-7  
                     pl-6  pb-8  mt-10  rounded-2xl'
        >
          <Logo className='mb-5' />
          <H2 className='text-green  text-[2rem]  font-semibold'>
            Get unlimited access to&nbsp;exclusive articles
          </H2>
          <p className='text-2xl  font-medium  mt-2'>
            Get rid of&nbsp;limits and&nbsp;read everything you&nbsp;wish
          </p>
          <button
            className='cursor-pointer  hover:bg-[#00A37D]  transition-colors
                       w-full  mt-7  font-medium  bg-green  text-white  pt-2  
                       pb-2.5  text-center  rounded-lg  sm:w-40'
          >
            Try For Free
          </button>
          <img
            className='absolute  -right-4  -top-3'
            src={saly}
            alt='Saly'
            loading='lazy'
          />
        </div>
        <ul
          className='hidden  mt-8  lg:grid  lg:grid-cols-3  lg:gap-x-8  lg:gap-y-12
                     lg:mt-12'
        >
          <li>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article4Image}
              alt='Article 4'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Watering mastery can seem like a&nbsp;tricky skill
                  to&nbsp;develop because a&nbsp;lot of&nbsp;things can go wrong
                  – you might overwater...
                </p>
              </div>
            </div>
          </li>
          <li className='mt-8  lg:mt-0'>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article5Image}
              alt='Article 5'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Repotting a plant can seem like a difficult task because a lot
                  of things can go wrong – you can damage...
                </p>
              </div>
            </div>
          </li>
          <li className='mt-8  lg:mt-0'>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article6Image}
              alt='Article 6'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Watering mastery can seem like a&nbsp;tricky skill
                  to&nbsp;develop because a&nbsp;lot of&nbsp;things can go wrong
                  – you might overwater...
                </p>
              </div>
            </div>
          </li>
          <li className='mt-8  lg:mt-0'>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article4Image}
              alt='Article 4'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Watering mastery can seem like a&nbsp;tricky skill
                  to&nbsp;develop because a&nbsp;lot of&nbsp;things can go wrong
                  – you might overwater...
                </p>
              </div>
            </div>
          </li>
          <li className='mt-8  lg:mt-0'>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article5Image}
              alt='Article 5'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Watering mastery can seem like a&nbsp;tricky skill
                  to&nbsp;develop because a&nbsp;lot of&nbsp;things can go wrong
                  – you might overwater...
                </p>
              </div>
            </div>
          </li>
          <li className='mt-8  lg:mt-0'>
            <img
              className='rounded-2xl  w-full  max-w-[521px]'
              src={article6Image}
              alt='Article 6'
              loading='lazy'
            />
            <div className='mt-4'>
              <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
              <H2 className='mt-1  mb-2.5'>Watering Mastery</H2>
              <div className='max-w-[31.25rem]'>
                <p className='text-[#78787A]'>
                  Watering mastery can seem like a&nbsp;tricky skill
                  to&nbsp;develop because a&nbsp;lot of&nbsp;things can go wrong
                  – you might overwater...
                </p>
              </div>
            </div>
          </li>
        </ul>
      </MainContainer>
    </section>
  );
}

export default Interesting;
