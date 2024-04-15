import React from 'react';
import styled from 'styled-components';
import Sneha from '../../images/Contributor-1.png';
import Monalika from '../../images/Contributor-2.png'
import Mansi from '../../images/contributor-3.jpg'
import Aakanksha from '../../images/Aakanksha.jpg'


const Contributors = styled.div`

text-align: center;
width: auto;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 30px;
`;

const Title = styled.h2`
  font-size: 42px;
  color: #ff6d6b;
  font-weight:700;
  margin-bottom: 48px;
  text-shadow: 1px 1px 1px rgb(43 57 74);
`;

const ContributorGrid = styled.div`
  width: auto;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 25px;
padding: 0 30px;

@media screen and (max-width: 1000px) {
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  padding: 0 20px;
}
`;

const ContributorBox = styled.div`
  padding: 20px; /* Increased padding for a larger clickable area */
  height: auto;
  width: 250px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border: 2px solid #FDA5A4;
  border-radius: 20px;
  background-color: #ffffff;
  /* gap: 30vh; */
  transition: all 0.3s ease-in-out; /* Adjusted transition timing for smoother effect */
  &:hover {
    transform: scale(1.1); /* Increased scale for a more noticeable effect */
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.3); /* Adjusted box-shadow on hover */
    cursor: pointer;
  }
`;


const Image = styled.img`
  width: 200px;
  height: 180px;
  margin: 5px;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #164863;
  margin: auto;
`;




const ContributorsSection = () => {
  return (
    <>
    <Contributors>
      <Title>CONTRIBUTORS</Title>
      <ContributorGrid>
        <ContributorBox>
          <Image src={Sneha} />
          <Heading>SNEHA CHAUHAN</Heading>
          
        </ContributorBox>
        <ContributorBox>
          <Image src={Monalika} />
          <Heading>MONALIKA PATNAIK</Heading>
          
        </ContributorBox>
        <ContributorBox>
          <Image src={Mansi}  />
          <Heading>MANSI JANGRA</Heading>
        </ContributorBox>
        <ContributorBox>
          <Image src={Aakanksha}  />
          <Heading>Aakanksha</Heading>
        </ContributorBox>
      </ContributorGrid>
    </Contributors>
    </>
  );
};

export default ContributorsSection;
