import React from 'react';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';

function App() {
  return (
    <MainLayout>
      <Homepage />
    </MainLayout>
  );
}

export default App;
