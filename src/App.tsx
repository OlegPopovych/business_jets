import { Layout } from './app/components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './app/pages/HomePage/HomePage';
import { UserPage } from './app/pages/UserPage/UserPage';

function App() {
  return (
    <div className='App' data-cy="app">
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/user/:userId' element={<UserPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
