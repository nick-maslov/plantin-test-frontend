import { type ReactElement, type ReactNode, useState } from 'react';
import { SearchQueryContext, SearchQueryDispatchContext } from './Context';

export function SearchQueryProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchQueryContext.Provider value={{ searchQuery }}>
      <SearchQueryDispatchContext.Provider value={{ setSearchQuery }}>
        {children}
      </SearchQueryDispatchContext.Provider>
    </SearchQueryContext.Provider>
  );
}
