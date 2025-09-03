import { ARTICLES } from '@/constants';
import { useSearchQuery } from '@/context/search/Context';
import classNames from 'classnames';
import { useMemo, type ReactElement } from 'react';
import H2 from '../elements/H2';
import MainContainer from '../elements/MainContainer';

function SearchResults(): ReactElement {
  const { searchQuery } = useSearchQuery();

  const filteredArticles = useMemo(() => {
    const term = searchQuery.toLowerCase().trim();
    if (term.length === 0) {
      return ARTICLES;
    }

    return ARTICLES.filter(
      (article) =>
        article.title.toLowerCase().includes(term) ||
        article.preview.toLowerCase().includes(term),
    );
  }, [searchQuery]);

  return (
    <section
      className={classNames('mt-6  lg:mt-12', {
        hidden: searchQuery.length === 0,
      })}
    >
      <MainContainer>
        <H2>Search Results</H2>
        {filteredArticles.length === 0 ? (
          <p className='mt-10  mb-40'>No results found.</p>
        ) : (
          <ul className='mt-4  lg:mt-9  grid  gap-8  lg:grid-cols-3  lg:gap-x-8  lg:gap-y-12'>
            {filteredArticles.map((article) => (
              <li key={article.id}>
                <img
                  className='rounded-2xl  w-full  max-w-[521px]'
                  src={article.image}
                  alt={article.title}
                />
                <div className='mt-4'>
                  <p className='text-[#ADB8C8]'>{article.meta}</p>
                  <H2 className='mt-1  mb-2.5'>{article.title}</H2>
                  <div className='max-w-[31.25rem]'>
                    <p className='text-[#78787A]'>{article.preview}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </MainContainer>
    </section>
  );
}

export default SearchResults;
