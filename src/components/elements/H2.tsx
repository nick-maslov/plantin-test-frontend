import classNames from 'classnames';
import type { ReactElement, ReactNode } from 'react';

interface H2Props {
  children: ReactNode;
  className?: string;
}

function H2({ children, className }: H2Props): ReactElement {
  return (
    <h2 className={classNames('text-2xl  leading-normal font-bold', className)}>
      {children}
    </h2>
  );
}

export default H2;
