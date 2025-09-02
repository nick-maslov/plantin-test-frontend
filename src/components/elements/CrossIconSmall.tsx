import classNames from 'classnames';
import type { MouseEventHandler, ReactElement } from 'react';

interface CloseIconProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

function CrossIconSmall({ onClick, className }: CloseIconProps): ReactElement {
  return (
    <div
      onClick={onClick}
      className={classNames('size-[17px]  cursor-pointer', className)}
    >
      <div
        className='absolute  left-1/2  top-1/2  h-[2px]  w-[20px]  -translate-x-1/2
                   -translate-y-1/2  rotate-45  bg-[#ADB8C8]  dark:bg-smooth-white'
      ></div>
      <div
        className='absolute  left-1/2  top-1/2  h-[2px]  w-[20px]  -translate-x-1/2
                   -translate-y-1/2  -rotate-45  bg-[#ADB8C8]  dark:bg-smooth-white'
      ></div>
    </div>
  );
}

export default CrossIconSmall;
