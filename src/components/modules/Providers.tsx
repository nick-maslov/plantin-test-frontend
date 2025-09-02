import { SearchQueryProvider } from '@/context/search/Provider';
import type { ReactElement, ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

function Providers({ children }: ProvidersProps): ReactElement {
  return <SearchQueryProvider>{children}</SearchQueryProvider>;
}

export default Providers;
