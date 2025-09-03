import articleImage from '@/assets/article-1.png';
import { useSearchQuery } from '@/context/search/Context';
import classNames from 'classnames';
import type { ReactElement } from 'react';
import H2 from '../elements/H2';
import MainContainer from '../elements/MainContainer';

function New(): ReactElement {
  const { searchQuery } = useSearchQuery();

  return (
    <section
      className={classNames('mt-6  lg:mt-12', {
        hidden: searchQuery.length > 0,
      })}
    >
      <MainContainer>
        <div className='relative  inline-block'>
          <svg
            className='rounded-l-md'
            width='77'
            height='36'
            viewBox='0 0 77 36'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 0H73.3837C75.5547 0 77.0069 2.23455 76.1251 4.21842L70 18L76.1251 31.7816C77.0069 33.7654 75.5547 36 73.3837 36H0V0Z'
              fill='#ED685C'
            />
          </svg>
          <p
            className='absolute  text-white  text-sm  font-semibold  left-[46%]  
                       -translate-x-1/2  top-[49%]  -translate-y-1/2'
          >
            New
          </p>
        </div>
        <div className='mt-2  lg:flex  lg:gap-8'>
          <img className='rounded-2xl' src={articleImage} alt='Article 1' />
          <div className='mt-4  lg:mt-1  2lg:mt-2'>
            <p className='text-[#ADB8C8]'>Feb 23 · 8 min read</p>
            <H2
              className='mt-1  mb-2.5  lg:text-5xl  lg:leading-snug  lg:mb-4
                         2lg:mb-5'
            >
              Tips & Tricks for&nbsp;Cutting
            </H2>
            <div className='max-w-[31.25rem]'>
              <p className='text-[#78787A]  lg:hidden'>
                Pruning, like any other skill, requires knowing what you
                are&nbsp;doing to&nbsp;achieve success. The&nbsp;old idea that
                anyone with&nbsp;a&nbsp;chain saw or&nbsp;a&nbsp;pruning saw can
                be a...
              </p>
              <p className='text-[#78787A]  hidden  lg:block'>
                Pruning, like any&nbsp;other skill, requires knowing what
                you&nbsp;are doing to&nbsp;achieve success. The&nbsp;old idea
                that anyone with&nbsp;a&nbsp;chain saw or&nbsp;a&nbsp;pruning
                saw can be a&nbsp;landscape pruner is far
                from&nbsp;the&nbsp;truth. More trees are&nbsp;killed
                or&nbsp;ruined each&nbsp;year from&nbsp;improper pruning than
                by&nbsp;pests. Remember that pruning is the&nbsp;removal or...
              </p>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default New;
