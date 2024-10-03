import React from 'react';
import './Home.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function Home() {
  return (
    
    <div className="home-container">
      <div className="text-section">
        <h1>Qemer Software Technologies</h1>
       <p>Join us today and be part of our community <br></br>
         Discover the benefits of being with us.</p>
      
        <div className="more-button-container">
        <Link to="/About" className="more-button">
          Know Us Better &#8594;
        </Link>
      </div>
      </div>
      


    </div>
 


  );

}

export default Home;

