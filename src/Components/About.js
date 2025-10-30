import React from 'react';

const About = () => {
  return (
    <div 
      className="container" 
      style={{ 
        minHeight: 'calc(100vh - 70px)', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '20px',    
        paddingBottom: '20px'  
      }}
    >
      <div className="row w-100 align-items-center">
        
       
        <div className="col-md-6 text-center">
          <img 
            src="/image.png" 
            className="img-fluid rounded shadow-sm" 
            alt="Person reading news on a tablet with newspaper backdrop" 
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>

      
        <div className="col-md-6 d-flex flex-column justify-content-center ps-md-5">
          
          <h1 className="display-4 fw-bold" style={{ letterSpacing: '1px' }}>
            ABOUT US
          </h1>
          
          <p className="lead text-muted mt-3">
            Our mission at NewsMonkey is to provide a clean, fast, and accessible interface for browsing the world's top headlines. We believe in delivering the news you care about, without the clutter or distractions.
          </p>

          <p className="mt-2">
            NewsMonkey is a modern, responsive web application built on React.js, featuring dynamically categorized news feeds, seamless infinite scrolling, and real-time data from the gnews.io API. We aim to keep you informed with an intuitive and efficient user experience.
          </p>
          
          <hr 
            style={{ 
              width: '80px', 
              borderTop: '3px solid #343a40', 
              opacity: 1 
            }} 
            className="mt-4"
          />
        </div>

      </div>
    </div>
  );
};

export default About;