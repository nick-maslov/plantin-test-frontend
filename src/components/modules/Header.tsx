import classNames from 'classnames';
import { useState, type ReactElement } from 'react';
import BurgerIcon from '../elements/BurgerIcon';
import CrossIconBig from '../elements/CrossIconBig';
import Logo from '../elements/Logo';
import MainContainer from '../elements/MainContainer';
import ProfileIcon from '../elements/ProfileIcon';
import SearchIconShort from '../elements/SearchIconShort';

function Header(): ReactElement {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [notCurrentPageIsHovered, setNotCurrentPageIsHovered] = useState(false);

  function handleOpenMenu(): void {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';

    const mainContentElem = document.getElementById('main-content');
    if (mainContentElem) {
      mainContentElem.style.opacity = '0';
    }

    const footerElem = document.getElementById('footer');
    if (footerElem) {
      footerElem.style.opacity = '0';
    }

    setMenuIsOpen(true);
  }

  function handleCloseMenu(): void {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);

    const mainContentElem = document.getElementById('main-content');
    if (mainContentElem) {
      mainContentElem.style.opacity = '1';
    }

    const footerElem = document.getElementById('footer');
    if (footerElem) {
      footerElem.style.opacity = '1';
    }

    setMenuIsOpen(false);
  }

  return (
    <header className='fixed  z-50  bg-white  top-0  left-0  right-0  py-5  [box-shadow:0px_0.4px_6.5px_0px_rgba(0,0,0,0.05),0px_2px_40px_0px_rgba(0,0,0,0.1)]'>
      <MainContainer className='flex  justify-between  items-center'>
        <nav
          className={classNames(
            'flex  gap-6  transition-opacity  duration-300',
            {
              'opacity-0': menuIsOpen,
            },
          )}
        >
          <Logo className='cursor-pointer' />
          <ul className='hidden  gap-6  lg:flex'>
            <li
              onMouseEnter={() => setNotCurrentPageIsHovered(true)}
              onMouseLeave={() => setNotCurrentPageIsHovered(false)}
              className='font-medium  border-b-[1.5px]  border-transparent  
            hover:border-black  transition-colors'
            >
              <a href='#'>Discover</a>
            </li>
            <li
              onMouseEnter={() => setNotCurrentPageIsHovered(true)}
              onMouseLeave={() => setNotCurrentPageIsHovered(false)}
              className='font-medium  border-b-[1.5px]  border-transparent  
            hover:border-black  transition-colors'
            >
              <a href='#'>My Plants</a>
            </li>
            <li
              onMouseEnter={() => setNotCurrentPageIsHovered(true)}
              onMouseLeave={() => setNotCurrentPageIsHovered(false)}
              className='font-medium  border-b-[1.5px]  border-transparent  
            hover:border-black  transition-colors'
            >
              <a href='#'>Diseases</a>
            </li>
            <li
              className={classNames(
                `cursor-default  font-medium  border-b-[1.5px]  transition-colors  duration-300`,
                {
                  'border-transparent': notCurrentPageIsHovered,
                  'border-black': !notCurrentPageIsHovered,
                },
              )}
            >
              <a>Blog</a>
            </li>
            <li
              onMouseEnter={() => setNotCurrentPageIsHovered(true)}
              onMouseLeave={() => setNotCurrentPageIsHovered(false)}
              className='font-medium  border-b-[1.5px]  border-transparent  
            hover:border-black  transition-colors'
            >
              <a href='#'>FAQ</a>
            </li>
            <li
              onMouseEnter={() => setNotCurrentPageIsHovered(true)}
              onMouseLeave={() => setNotCurrentPageIsHovered(false)}
              className='font-medium  border-b-[1.5px]  border-transparent  
            hover:border-black  transition-colors'
            >
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </nav>
        <div
          className={classNames(
            `absolute  right-4  flex  items-center  gap-7  transition-opacity  
            duration-300  2lg:right-8`,
            {
              'opacity-0': menuIsOpen,
            },
          )}
        >
          <SearchIconShort className='cursor-pointer' />
          <BurgerIcon onClick={handleOpenMenu} className='-mt-0.5  lg:hidden' />
          <ProfileIcon className='hidden  cursor-pointer  lg:inline  -translate-y-px' />
        </div>
      </MainContainer>
      <div
        className={classNames(
          'fixed  overflow-y-scroll  inset-0  z-50  bg-white  transition-transform  duration-300  lg:hidden',
          {
            'translate-x-[100vw]': !menuIsOpen,
          },
        )}
      >
        <div className='flex  items-center  justify-between  px-4  pt-5'>
          <Logo />
          <CrossIconBig onClick={handleCloseMenu} />
        </div>
        <nav className='mt-12  pb-12'>
          <ProfileIcon className='mx-auto  mb-6  size-[2.5rem]' />
          <ul className='flex  flex-col  gap-6'>
            <li className='font-medium  text-center  text-xl'>
              <a href='#'>Discover</a>
            </li>
            <li className='font-medium  text-center  text-xl'>
              <a href='#'>My Plants</a>
            </li>
            <li className='font-medium  text-center  text-xl'>
              <a href='#'>Diseases</a>
            </li>
            <li className='font-medium  text-center  text-xl'>
              <a href='#'>Blog</a>
            </li>
            <li className='font-medium  text-center  text-xl'>
              <a href='#'>FAQ</a>
            </li>
            <li className='font-medium  text-center  text-xl'>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
