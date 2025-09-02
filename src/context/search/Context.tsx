import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from 'react';

interface SearchQueryContextProps {
  searchQuery: string;
}

interface SearchQueryDispatchContextProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export const SearchQueryContext = createContext<SearchQueryContextProps | null>(
  null,
);

export const SearchQueryDispatchContext =
  createContext<SearchQueryDispatchContextProps | null>(null);

export function useSearchQuery(): SearchQueryContextProps {
  const context = useContext(SearchQueryContext);

  if (!context) {
    throw new Error(
      'SearchQueryContext must be used within a SearchQueryContextProvider',
    );
  }

  return context;
}

export function useSearchQueryDispatch(): SearchQueryDispatchContextProps {
  const context = useContext(SearchQueryDispatchContext);

  if (!context) {
    throw new Error(
      'SearchQueryDispatchContext must be used within a SearchQueryDispatchContextProvider',
    );
  }

  return context;
}
