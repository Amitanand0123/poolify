import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  PoolProvider  from './context/PoolProvider';

import Header from './components/shared/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <PoolProvider>
      <Router>
        <div className="bg-white min-h-screen">
          <Header />
          <main className="bg-walmart-light-gray">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </PoolProvider>
  );
}

export default App;