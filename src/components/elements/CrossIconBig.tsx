import classNames from 'classnames';
import type { MouseEventHandler, ReactElement } from 'react';

interface CloseIconProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

function CrossIconBig({ onClick, className }: CloseIconProps): ReactElement {
  return (
    <div
      onClick={onClick}
      className={classNames(
        'relative  size-[17.67px]  cursor-pointer',
        className,
      )}
    >
      <div
        className='absolute  left-1/2  top-1/2  h-[2px]  w-[25px]  -translate-x-1/2
                   -translate-y-1/2  rotate-45  bg-[#C5D1DB]  dark:bg-smooth-white'
      ></div>
      <div
        className='absolute  left-1/2  top-1/2  h-[2px]  w-[25px]  -translate-x-1/2
                   -translate-y-1/2  -rotate-45  bg-[#C5D1DB]  dark:bg-smooth-white'
      ></div>
    </div>
  );
}

export default CrossIconBig;
