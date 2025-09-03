import classNames from 'classnames';
import type { ReactElement, ReactNode } from 'react';

interface MainContainerProps {
  children?: ReactNode;
  className?: string;
}

function MainContainer({
  children,
  className,
}: MainContainerProps): ReactElement {
  return (
    <div className={classNames('max-w-[1105px]  px-4  mx-auto', className)}>
      {children}
    </div>
  );
}

export default MainContainer;
