import type { ReactElement } from 'react';
import Breadcrumbs from './components/modules/Breadcrumbs';
import Footer from './components/modules/Footer';
import Header from './components/modules/Header';
import Interesting from './components/modules/Interesting';
import New from './components/modules/New';
import Providers from './components/modules/Providers';
import SearchResults from './components/modules/SearchResults';
import StayTuned from './components/modules/StayTuned';
import TopOfTheDay from './components/modules/TopOfTheDay';

function App(): ReactElement {
  return (
    <Providers>
      <Header />
      <main
        className='pt-[4rem]  transition-opacity  duration-300'
        id='main-content'
      >
        <Breadcrumbs />
        <StayTuned />
        <SearchResults />
        <New />
        <TopOfTheDay />
        <Interesting />
      </main>
      <Footer />
    </Providers>
  );
}

export default App;
