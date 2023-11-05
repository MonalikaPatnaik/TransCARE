import React, { useState, useEffect } from 'react';

const ScholarshipComponent = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/scholarships')
      .then(response => {
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Received data:', data);
        setScholarships(data);
      })
      .catch(error => {
        console.error('Error fetching scholarships:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs once after the initial render

  return (
    <div>
      <h1>Scholarships Mentioning "Transgender"</h1>
      <ul>
        {scholarships.map((scholarship, index) => (
          <li key={index}>
            <a href={scholarship.link} target="_blank" rel="noopener noreferrer">
              {scholarship.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScholarshipComponent;
