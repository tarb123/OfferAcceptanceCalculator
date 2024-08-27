import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FirstPage.css';

const FirstPage = () => {
  const [checkedButtons, setCheckedButtons] = useState({
    financialOffer: false,
    otherElements: false,
  });
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setCheckedButtons({
      ...checkedButtons,
      [event.target.name]: event.target.checked,
    });

    if (event.target.name === 'financialOffer' && event.target.checked) {
      navigate('/financial-offer'); 
    }
  };

  return (
    
    <div className="first-page-container">
      <h1 className="main-heading">Welcome to the Offer Calculator</h1>
      <div className="button-container">
        <div className="rounded-button">
          <input
            type="checkbox"
            id="financialOffer"
            name="financialOffer"
            checked={checkedButtons.financialOffer}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="financialOffer">Calculate Financial Offer</label>
        </div>
        <div className="rounded-button">
          <input
            type="checkbox"
            id="otherElements"
            name="otherElements"
            checked={checkedButtons.otherElements}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="otherElements">Calculate Other Elements</label>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
