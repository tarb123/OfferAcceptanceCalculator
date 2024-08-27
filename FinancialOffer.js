import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './FinancialOffer.css';

const FinancialOffer = () => {
  const [activeCompensation, setActiveCompensation] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const toggleOptions = (compensation) => {
    setActiveCompensation(activeCompensation === compensation ? null : compensation);
  };

  const handleOptionChange = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  const navigateToCalculator = () => {
    navigate('/offer-acceptance-letter-calculator');
  };

  return (
    <div className="financial-offer-container">
      {/* Button to view SimpleGraph.js */}
      <div className="left-button-container">
        <Link to="/graph">
          <button className="widget-button">View Graph</button>
        </Link>
      </div>

      {/* Button to view SmallCalculator.js */}
      <div className="left-button-container">
        <Link to="/small-calculator">
          <button className="widget-button">View Small Calculator</button>
        </Link>
      </div>

      <h1 className="heading">Financial Offer Calculator</h1>
      <h2 className="subheading">Salary Breakdown Compensation</h2>

      <div className="message-box">
        <ul>
          <li>Select here your current Compensation</li>
          <li>What do you get in your current company</li>
          <li>Any additional comps being offered</li>
        </ul>
      </div>

      <div className="compensation-buttons">
        <button className="compensation-button" onClick={() => toggleOptions('Basic Salary')}>Basic Salary</button>
        <button className="compensation-button" onClick={() => toggleOptions('Allowance')}>Allowances</button>
        <button className="compensation-button" onClick={() => toggleOptions('Variable Pay')}>Variable Pay</button>
        <button className="compensation-button" onClick={() => toggleOptions('Benefits')}>Benefits</button>
      </div>

      {activeCompensation === 'Basic Salary' && (
        <div className="options active">
          <ul>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('House Rent (45% of basic)')} />House Rent (45% of basic)</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Utilities (10% of basic)')} />Utilities (10% of basic)</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Medical (10% of basic)')} />Medical (10% of basic)</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('LFA (10% of basic)')} />LFA (10% of basic)</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Adjustment for Fuel')} />Adjustment for Fuel</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Retention amount')} />Retention amount</label></li>
          </ul>
        </div>
      )}

      {activeCompensation === 'Allowance' && (
        <div className="options active">
          <ul>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Allowance in lieu of second Car')} />Allowance in lieu of second Car</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Disturbance Allowance')} />Disturbance Allowance</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Market Premium')} />Market Premium</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Driver Salary (Allowance)')} />Driver Salary (Allowance)</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Servant')} />Servant</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Tel (res)')} />Tel (res)</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Tel (cell)')} />Tel (cell)</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Internet')} />Internet</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Dearness Allowance')} />Dearness Allowance</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Project Allowance')} />Project Allowance</label></li>
          </ul>
        </div>
      )}

      {activeCompensation === 'Variable Pay' && (
        <div className="options active">
          <ul>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Variable Bonus')} />Variable Bonus</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Special Milestone')} />Special Milestone</label></li>
          </ul>
        </div>
      )}

      {activeCompensation === 'Benefits' && (
        <div className="options active">
          <ul>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Car')} />Car</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Car Insurance')} />Car Insurance</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Car Fuel')} />Car Fuel</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Car Maintenance')} />Car Maintenance</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Car Reg / Road Tax')} />Car Reg / Road Tax</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Tracker')} />Tracker</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Company Provided Traveling')} />Company Provided Traveling</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Corporate Club Membership')} />Corporate Club Membership</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Club Subscription')} />Club Subscription</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Apartment Rent')} />Apartment Rent</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Hard Furnishings')} />Hard Furnishings</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Credit Cards / Statutory Contribution')} />Credit Cards / Statutory Contribution</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Other Perquisites')} />Other Perquisites</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Security Services / Guards')} />Security Services / Guards</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Meal Subsidy / Housing Loan')} />Meal Subsidy / Housing Loan</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Entertainment Allowance')} />Entertainment Allowance</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Leave Encashment')} />Leave Encashment</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Home Travel')} />Home Travel</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Group Life')} />Group Life</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Hospitalization Insurance (self, wife, children)')} />Hospitalization Insurance (self, wife, children)</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Medical (OPD)')} />Medical (OPD)</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Pension')} />Pension</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('PF')} />PF</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('EOBI')} />EOBI</label></li>
            <li><label><input type="checkbox" onChange={() => handleOptionChange('Gratuity')} />Gratuity</label></li>
          </ul>
        </div>
      )}

      <div className="selected-compensation">
        <h3>Your Offer Compensation Selection:</h3>
        <ul>
          {selectedOptions.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>

      {/* button for SMP */}
      <div className="centered-button-container">
        <button className="widget-button" onClick={navigateToCalculator}>
          Calculate Salary Compensation Breakdown
        </button>
      </div>
    </div>
  );
};

export default FinancialOffer;




// import React, { useState } from 'react';
// import './FinancialOffer.css';

// const FinancialOffer = () => {
//   const [activeCompensation, setActiveCompensation] = useState(null);
//   const [showSalaryContent, setShowSalaryContent] = useState(false);

//   const toggleOptions = (compensation) => {
//     if (activeCompensation === compensation) {
//       setActiveCompensation(null); // Close if already active
//     } else {
//       setActiveCompensation(compensation); // Open the selected one
//     }
//   };

//   const toggleSalaryContent = () => {
//     setShowSalaryContent(!showSalaryContent);
//   };
  
// return (
// <div className="financial-offer-container">
// <h1 className="heading">{">>"} Financial Offer Calculator</h1>
// <h1>Salary Compensation Breakdown</h1>

// <div className="message-box light-blue-box"><label>Select Current Compensation Company:</label></div>
// <div className="message-box dark-blue-box"><label>What Do You Get In Your Current Company:</label></div>
// <div className="message-box light-blue-box"><label>Any Additional Comps Being Offered:</label></div>

// <div className="side-buttons"><div className="compensation-group"></div>

// <div className="compensation-group">
// <button className="compensation-button" onClick={() => toggleOptions('Basic Salary')}>Basic Salary</button>
// {activeCompensation === 'Basic Salary' && (
// <div className="options">
// <ul>
// <li>House Rent (45% of basic)</li><li>Utilities (10% of basic)</li><li>Medical (10% of basic)</li>
// <li>Adjustment for Fuel</li><li>Retention amount</li>
// </ul>
// </div>
// )}
// </div>

// <div className="compensation-group">
// <button className="compensation-button" onClick={() => toggleOptions('Allowance')}>Allowances</button>
// {activeCompensation === 'Allowance' && (
// <div className="options">
// <ul>
// <li>LFA (10% of basic)</li><li>Allowance in lieu of  second Car</li><li>Disturbance Allowance</li>
// <li>Market Premium</li><li>Driver Salary (Allowance)</li><li>Project Allowance</li>
// </ul>
// </div>
// )}
// </div>

// <div className="compensation-group">
// <button className="compensation-button" onClick={() => toggleOptions('Variable Pay')}>Variable Pay</button>
// {activeCompensation === 'Variable Pay' && (
// <div className="options">
// <ul>
// <li>Variable Bonus</li><li>Special Milestone</li>
// </ul>
// </div>
// )}
// </div>

// <div className="compensation-group">
// <button className="compensation-button" onClick={() => toggleOptions('Benefits')}>Benefits</button>
// {activeCompensation === 'Benefits' && (
// <div className="options">
// <ul>
// <li>Car</li><li>Car Insurance</li><li>Car Fuel</li>
// <li>Car Maintenance</li><li>Car Reg / Road Tax</li>
// <li>Tracker</li><li>Company Provided Traveling</li>
// <li>Corporate Club Membership</li><li>Club Subscription</li>
// <li>Apartment rent</li><li>Meal Subsidy / Housing Loan</li>
// <li>Gratuity</li><li>Medical (OPD)</li><li>Leave Encashment</li>
// </ul>
// </div>
// )}
// </div>
// </div>

// <div className="widget-button-container">
// <button className="widget-button"  onClick={toggleSalaryContent}>Calculate Salary Compensation Breakdown:</button>
// </div>
 
// </div>
//   );
// };

// export default FinancialOffer;

 


// import React, { useState } from 'react';
// import './FinancialOffer.css';

// const FinancialOffer = () => {
// const [currentCompany, setCurrentCompany] = useState('');
// const [currentCompensation, setCurrentCompensation] = useState('');
// const [additionalComps, setAdditionalComps] = useState('');

// return (
//   <div className="financial-offer-container">
//     <h1 className="heading">{">>"} Financial Offer Calculator</h1>
      // {/* <div className="message-box light-blue-box">
      //   <label>Select Current Compensation Company:</label>
      //   <input type="text" value={currentCompany} onChange={(e) => setCurrentCompany(e.target.value)} />
      // </div>
      // <div className="message-box dark-blue-box">
      //   <label>What Do You Get In Your Current Company:</label>
      //   <input type="text" value={currentCompensation} onChange={(e) => setCurrentCompensation(e.target.value)} />
      // </div>
      // <div className="message-box light-blue-box">
      //   <label>Any Additional Comps Being Offered:</label>
      //   <input type="text" value={additionalComps} onChange={(e) => setAdditionalComps(e.target.value)} />
      // </div> */}
//       {/* Add a button or other element to trigger calculations or display results */}
//     </div>
//   );
// };

// export default FinancialOffer;





// import React from 'react';
// import './FinancialOffer.css';

// const FinancialOffer = () => {
//   return (
//     <div className="financial-offer-container">
//       <h1 className="heading">{'>>'} Financial Offer Calculator</h1>
//       <div className="message-box light-blue-box">
//         <p>Select Current Compensation Company</p>
//       </div>
//       <div className="message-box dark-blue-box">
//         <p>What Do You Get In Your Current Company</p>
//       </div>
//       <div className="message-box light-blue-box">
//         <p>Any Additional Comps Being Offered?</p>
//       </div>
//     </div>
//   );
// };

// export default FinancialOffer;
