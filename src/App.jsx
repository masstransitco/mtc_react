// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute';

// Pages and Components
import BookingPage from './pages/BookingPage';
import UserProfile from './components/UserProfile';
import PaymentHistory from './components/PaymentHistory';
import InteractiveMap from './components/InteractiveMap';
import QRScannerOverlay from './components/QRScanner/QRScannerOverlay';

// Styles
import './styles/globals.css';

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <Router>
          <div className="App">
            <Header />
            <main>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<InteractiveMap />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/qr-scanner" element={<QRScannerOverlay />} />

                {/* Protected Routes */}
                <Route
                  path="/user-profile"
                  element={
                    <PrivateRoute>
                      <UserProfile />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/payment-history"
                  element={
                    <PrivateRoute>
                      <PaymentHistory />
                    </PrivateRoute>
                  }
                />

                {/* Catch-all Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AppProvider>
    </AuthProvider>
  );
}

// NotFound Component for undefined routes
const NotFound = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>404 - Page Not Found</h2>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

export default App;
