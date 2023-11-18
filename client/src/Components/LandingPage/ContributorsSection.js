import React from 'react';
import styled from 'styled-components';
import Sneha from '../../images/Contributor-1.png';
import Monalika from '../../images/Contributor-2.png'
import Mansi from '../../images/contributor-3.jpg'
import Kashish from '../../images/Contributor-4.jpeg'



const Contributors = styled.div`
background-color: #FAE4CD;
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
  color: #00008B;
  margin-bottom: 48px;
  margin-top: 0; /* Add this line to set top margin to 0 */
  align-items: center;
  justify-content: center;
`;

const ContributorGrid = styled.div`
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  gap: 24px;
`;

const ContributorBox = styled.div`
  padding: 20px; /* Increased padding for a larger clickable area */
  height: 350px;
  width: 300px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: #ffffff;
  gap: 20vh;
  transition: all 0.3s ease-in-out; /* Adjusted transition timing for smoother effect */
  &:hover {
    transform: scale(1.1); /* Increased scale for a more noticeable effect */
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.3); /* Adjusted box-shadow on hover */
    cursor: pointer;
  }
`;


const Image = styled.img`
  width: 250px;
  height: 180px;
  margin: 5px;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #164863;
  margin: auto;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #00008B;
  margin: auto;
`;


const ContributorsSection = () => {
  return (
    <>
    <Contributors>
      <Title>Contributors</Title>
      <ContributorGrid>
        <ContributorBox>
          <Image src={Sneha} />
          <Heading>SNEHA CHAUHAN</Heading>
          <Paragraph>
          Efficient Coder | Embracing Diligence and Critical Thinking | Mindset for Growth, Honesty at Core.
          </Paragraph>
        </ContributorBox>
        <ContributorBox>
          <Image src={Monalika} />
          <Heading>MONALIKA PATNAIK</Heading>
          <Paragraph>
            Sed eu lectus varius, dapibus nulla at, molestie odio. Maecenas id feugiat arcu.
          </Paragraph>
        </ContributorBox>
        <ContributorBox>
          <Image src={Mansi}  />
          <Heading>MANSI JANGRA</Heading>
          <Paragraph>
            Quisque sit amet risus ut metus consectetur feugiat. Morbi facilisis justo ut
            cursus cursus.
          </Paragraph>
        </ContributorBox>
      </ContributorGrid>
    </Contributors>
    </>
  );
};

export default ContributorsSection;
