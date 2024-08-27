import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FirstPage from './components/FirstPage';
import FinancialOffer from './components/FinancialOffer';
import OfferAcceptanceLetterCalculator from './components/OfferAcceptanceLetterCalculator';
import ConsiderationTable from './components/ConsiderationTable';
import SimpleGraph from './components/SimpleGraph';
import SmallCalculator from './components/SmallCalculator'; // Import SmallCalculator

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/financial-offer" element={<FinancialOffer />} />
          <Route path="/offer-acceptance-letter-calculator" element={<OfferAcceptanceLetterCalculator />} />
          <Route path="/graph" element={<SimpleGraph />} />
          <Route path="/consideration" element={<ConsiderationTable />} />
          <Route path="/small-calculator" element={<SmallCalculator />} /> {/* Add SmallCalculator route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

