import React from 'react';
// import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Header.css'; // Assuming you have a separate CSS file

const Header = () => {
    return (
        <header>
            <div className="logo_container">
            <span className="logo_helper"></span>
            <a href="https://conductivity.com.pk/">
            <img src="https://conductivity.com.pk/wp-content/uploads/2022/04/Capture.png" width="484" height="50" 
            alt="Conductivity Career &amp; HR Solutions" id="logo" 
            data-height-percentage="54" data-actual-width="484" data-actual-height="75"/>
            </a><h5>A Project of Conductivity & HR Solutions</h5>
            </div>
            {/* Add the link button for the graph

            <div className="graph-link-container">
            <Link to="/graph">
            <button className="widget-button">View Graph</button>
            </Link>
            </div> */}
        </header>
    );
};

export default Header;