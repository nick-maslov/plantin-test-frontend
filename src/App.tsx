import type { ReactElement } from 'react';
import Breadcrumbs from './components/modules/Breadcrumbs';
import Header from './components/modules/Header';
import Providers from './components/modules/Providers';
import StayTuned from './components/modules/StayTuned';

function App(): ReactElement {
  return (
    <Providers>
      <Header />
      <main className='transition-opacity  duration-300' id='main-content'>
        <Breadcrumbs />
        <StayTuned />
      </main>
    </Providers>
  );
}

export default App;
