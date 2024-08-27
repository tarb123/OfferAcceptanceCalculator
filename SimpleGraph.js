import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import './SimpleGraph.css';

const data = [
  { name: 'Financial Compensation', value: 80 },
  { name: 'Non-Financial', value: 40 },
  { name: 'Other Factor', value: 30 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const SimpleGraph = () => {
  return (
    <div className="graph-page-container">
      <h1>Overall Rating</h1>
      <div className="graph-container">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            innerRadius={90}
            outerRadius={145}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      <div className="info-box">
        <h4>Our Recommendation</h4>
        <p>User are advised to take our recommendation as a tool for considering the jobs in left.</p>
    
      </div>
    </div>
  );
};

export default SimpleGraph;
