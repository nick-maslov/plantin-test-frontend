import {
  useSearchQuery,
  useSearchQueryDispatch,
} from '@/context/search/Context';
import { getTemperature } from '@/utils/get-temperature';
import classNames from 'classnames';
import {
  useEffect,
  useState,
  type ChangeEvent,
  type ReactElement,
} from 'react';
import CrossIconSmall from '../elements/CrossIconSmall';
import GirlImage from '../elements/GirlImage';
import H2 from '../elements/H2';
import MainContainer from '../elements/MainContainer';
import SearchIconLong from '../elements/SearchIconLong';

function StayTuned(): ReactElement {
  const { searchQuery } = useSearchQuery();
  const { setSearchQuery } = useSearchQueryDispatch();
  const [temperature, setTemperature] = useState('...');

  function handleSearchQueryChange(e: ChangeEvent<HTMLInputElement>): void {
    setSearchQuery(e.target.value);
  }

  function handleClearSearch(): void {
    setSearchQuery('');
  }

  useEffect(() => {
    async function fetchTemperature(): Promise<void> {
      try {
        const temperatureValue = await getTemperature();
        setTemperature(temperatureValue.toString());
      } catch (error) {
        console.error('failed to fetch temperature:', error);
        setTemperature('N/A');
      }
    }

    fetchTemperature();
  }, []);

  return (
    <section className='mt-6'>
      <MainContainer>
        <div
          className='relative  bg-green/[16%]  px-4  py-4  lg:pt-12  
                     lg:pl-8  xl:pl-11  rounded-2xl  lg:min-h-[270px]'
        >
          <H2 className='text-green  !font-extrabold  lg:text-3xl'>
            Stay always tuned with&nbsp;planting trends
          </H2>
          <p className='text-lg  font-bold  mt-2.5'>
            Current temperature is: {temperature}°C
          </p>
          <div className='relative  mt-4  max-w-[32rem]'>
            <input
              id='search'
              className='bg-white  rounded-xl  px-4  pt-2  pb-2.5  w-full
                placeholder:text-gray  placeholder:text-sm  lg:placeholder:text-base
                  lg:pt-3  lg:pb-3.5  focus:outline-none  focus:ring-2  focus:ring-green'
              placeholder='Search'
              type='text'
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
            <SearchIconLong
              className={classNames(
                'absolute  right-4  top-[49%]  -translate-y-1/2',
                {
                  hidden: searchQuery.length > 0,
                },
              )}
            />
            <CrossIconSmall
              onClick={handleClearSearch}
              className={classNames(
                'absolute  right-4  top-[49%]  -translate-y-1/2  cursor-pointer',
                {
                  hidden: searchQuery.length === 0,
                },
              )}
            />
          </div>
          <GirlImage className='hidden  lg:inline  absolute  right-4  bottom-0' />
        </div>
      </MainContainer>
    </section>
  );
}

export default StayTuned;
