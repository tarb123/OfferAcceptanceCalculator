import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import considerationsData from '../data/consideration.json';
import './ConsiderationTable.css';

const ConsiderationTable = () => {
  const [ratings, setRatings] = useState(Array(considerationsData.length).fill(0));
  const [sortedConsiderations, setSortedConsiderations] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleRatingChange = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = parseInt(rating);
    setRatings(newRatings);
  };

  const handleSubmit = () => {
    const considerationsWithRatings = considerationsData.map((item, index) => ({
      ...item,
      rating: ratings[index],
    }));
    const sorted = considerationsWithRatings.sort((a, b) => a.rating - b.rating);
    setSortedConsiderations(sorted);
    setSubmitted(true);
  };

  return (
    <div className="consideration-table-container">
      {!submitted ? (
        <div>
          <h1>Rate The Job Consideration Here!!</h1>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Rating</th>
                  <th>Considerations</th>
                </tr>
              </thead>
              <tbody>
                {considerationsData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="number"
                        value={ratings[index]}
                        onChange={(e) => handleRatingChange(index, e.target.value)}
                        min="1"
                        max="10"
                      />
                    </td>
                    <td>{item.consideration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="button-container">
            <button className="submit" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Sorted Considerations</h1>
          <div className="table-container">
            <table border="1">
              <thead>
                <tr>
                  <th>Rating</th>
                  <th>Considerations</th>
                  <th>Attributes</th>
                  <th>Offered</th>
                  <th>Current</th>
                </tr>
              </thead>
              <tbody>
                {sortedConsiderations.map((item, index) => (
                  <tr key={index}>
                    <td>{item.rating}</td>
                    <td>{item.consideration}</td>
                    <td>{item.rating <= 3 ? item.attributes.join(', ') : ''}</td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="button-container">
            <button className="skip" onClick={() => navigate('/salary')}>Skip</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsiderationTable;
