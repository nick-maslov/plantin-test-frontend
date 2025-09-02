import type { ReactElement } from 'react';

interface SearchIconShortProps {
  className?: string;
}

function SearchIconShort({ className }: SearchIconShortProps): ReactElement {
  return (
    <svg
      className={className}
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.5 13.5L18.5 18.5M15.5 8.5C15.5 12.366 12.366 15.5 8.5 15.5C4.63401 15.5 1.5 12.366 1.5 8.5C1.5 4.63401 4.63401 1.5 8.5 1.5C12.366 1.5 15.5 4.63401 15.5 8.5Z'
        stroke='#C5D1DB'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default SearchIconShort;
