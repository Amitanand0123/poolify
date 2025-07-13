import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  PoolProvider  from './context/PoolProvider';
import Header from './components/shared/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { AuthProvider } from './context/AuthProvider';
import { CartProvider } from './context/CartProvider';
import DealsPage from './pages/DealsPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <PoolProvider>
          <Router>
            <div className="bg-white min-h-screen">
              <Header />
              <main className="bg-walmart-light-gray">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="deals/:category" element={<DealsPage />} />
                </Routes>
              </main>
            </div>
          </Router>
        </PoolProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;