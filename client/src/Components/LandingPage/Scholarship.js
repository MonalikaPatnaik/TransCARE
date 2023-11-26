import React, { useState, useEffect } from 'react';
import imageUrl from '../../images/scholarhat.png';
import Loading from '../Loader/Loader';

const cardContainerStyle = {
  display: 'flex',
  maxWidth: '100%',
  flex: '1 0 100%',
  padding: '20px',
  margin: '100px 140px',
};

const container = {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  color: 'black',
  fontSize: '1rem',
 
};

const imgcontainer = {
  width: '80%',
  height: '180px',
  overflow: 'hidden',
};

const cardStyle = {
  margin: '0 15px 15px 0',
  padding: '0 0 10px',
  display: 'flex',
  borderTopLeftRadius: '28px',
  borderBottomRightRadius: '28px',
  border: '4px solid rgb(16 122 175)',
  flexWrap: 'wrap',
  boxShadow: '0 3px 6px rgba(0,0,0,.15)',
  position: 'relative',
  maxWidth: '100%',
};

export const buttonClass = {
  fontSize: '18px',
  width: '140px',
  height: '42px',
  color: '#ffffff',
  border: '0.5px solid #057fd0',
  marginLeft: '2rem',
  marginTop: '2rem',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
  borderBottomLeftRadius: '6px',
  borderBottomRightRadius: '6px',
  boxShadow: '0px 1px 0px 0px #f0f7fa',
  textShadow: '0px -1px 0px #5b6178',
  textAlign: 'center',
};

const scholarshipImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  marginLeft: '30px',
};
const scholarship_container={
  marginTop:'0px',
}
const headingStyle = {
  
  textTransform:'uppercase',
  marginTop:'0px' ,
  textAlign: 'center',
  marginBottom: '30px',
};

// ... (existing code)

const ScholarshipComponent = () => {
  const [scholarships, setScholarships] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching scholarships:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <h1 style={headingStyle}>Scholarships</h1>
      <div style={cardContainerStyle}>
        {scholarships.length === 0 ? (
          <p style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '50px' }}>
            No scholarships found.
          </p>
        ) : (
          scholarships.map((scholarship, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                border: hoveredIndex === index ? '6px solid rgb(16 122 175)' : '5px solid rgb(76 166 211)',
                borderRadius: hoveredIndex === index ? '30px' : '30px 0px 30px 0px',
                transition: 'all 0.3s ease-out',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={imgcontainer}>
                <img src={imageUrl} alt="Scholarship" style={scholarshipImageStyle} />
              </div>
              <div style={container}>
                <h3>{scholarship.title}</h3>
                <a
                  style={{
                    ...buttonClass,
                    background:
                      hoveredIndex === index ? 'linear-gradient(#019ad2, #33bdef)' : 'linear-gradient(#33bdef, #019ad2)',
                  }}
                  href={scholarship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Here
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ScholarshipComponent;
