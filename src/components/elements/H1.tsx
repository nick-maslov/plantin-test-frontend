import classNames from 'classnames';
import type { ReactElement, ReactNode } from 'react';

interface H2Props {
  children: ReactNode;
  className?: string;
}

function H1({ children, className }: H2Props): ReactElement {
  return (
    <h1
      className={classNames(
        'text-2xl  leading-normal  font-extrabold  lg:text-3xl',
        className,
      )}
    >
      {children}
    </h1>
  );
}

export default H1;
