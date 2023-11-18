import React from "react";
import styled from "styled-components";
import Library from '../../images/Library_image.jpg'
import CommunityForum from '../../images/heroimg.png'
import GovtPolicies from '../../images/policies.jpg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const Services = styled.section`
  padding: 30px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 42px;
  color: #ff6d6b;
  font-weight:700;
  margin-bottom: 48px;
  text-shadow: 1px 1px 1px rgb(43 57 74);
`;

const ServiceGrid = styled.div`
width: auto;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 30px;

@media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`;

const ServiceCard = styled.div`
  align-items: center;
  display: flex;
  background-color: #F5F0F0;
  border: 2px solid #FDA5A4;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  height: 400px;
  width: 350px;
  margin: 20px; /* Increased margin for a larger gap between cards */
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjusted box-shadow for a subtle effect */
  color: var(--text-clr);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Increased scale for a more pronounced hover effect */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Adjusted box-shadow on hover */
    cursor: pointer;
  }
`;


const Image = styled.img`
height: 170px;
width: 180px;
margin-bottom: 10px;
border: 0.5px solid gray;
box-shadow: 3px 3px 3px gray;
`;

const Heading = styled.h3`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #000000;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #000000;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 18px;
  background: #2B394A;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #ff6d6b;
  }
`;

const ServicesSection = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <Services id="featureSection">
      <Title>OUR SERVICES</Title>
      <ServiceGrid>
        <ServiceCard>
          
          <Image src={Library} alt="Service Icon" />
          <Heading>TransBookshelf</Heading>
          <Paragraph>
          Empowering Trans voices through Knowledge , Stories and embracing Trans literacy.
          </Paragraph>
          <Link to="./library"> <Button >Learn More</Button></Link>
        </ServiceCard>
        <ServiceCard>
          <Image src={CommunityForum} alt="Service Icon" />
          <Heading>TransTalk </Heading>
          <Paragraph>
          Embrace Your Authentic Self,connecting Transgender Souls, Sharing Stories.
          </Paragraph>
          {isAuthenticated ?(
              <Link to="./forum">
              <Button>Learn More</Button>
            </Link>
          ):(
            <Button onClick={() => loginWithRedirect()}>Learn More</Button>
          )}
    
        </ServiceCard>
        <ServiceCard>
          <Image src={GovtPolicies} alt="Service Icon" />
          <Heading>TransPolicy Hub</Heading>
          <Paragraph>
          Navigating Government Policies for Transgender Rights and Equality.
          </Paragraph>
          <Link to="./scholarships"> <Button >Learn More</Button></Link>
        </ServiceCard>
      </ServiceGrid>
    </Services>
  );
};

export default ServicesSection;
