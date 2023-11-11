import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import styled from 'styled-components';
import { Button } from '../ButtonElements';
import { Link } from "react-router-dom";
import img from '../../images/about.png';

const AboutContainer = styled.div`
    color: var(--text-clr);
    background: #FFF5E4;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    justify-content: center;
`;

const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgstart }) => (imgstart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgstart }) => (imgstart ? `'col1' 'col2'` : `'col1' 'col2'`)};
    }
`;

const Column = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`;

const TextWrapper = styled(Column)`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

const TopLine = styled.p`
    opacity: 1;
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    color: var(--text-clr);

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

const SubTitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')}; 
    color: var(--text-clr);
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const ImgWrap = styled(Column)`
    max-width: 555px;
    height: 100%;
`;

const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

const HomeObject = {
    id: 'about',
    lightText: true,
    lightTextDesc: true,
    topLine: "Let's come together",
    headline: 'Welcome to TransCare - Empowering Transgender Lives!',
    description: 'At TransCare, we are dedicated to providing a supportive and inclusive online platform for the transgender community. Our purpose is to empower transgender individuals by offering resources, fostering connection, and promoting self-acceptance.We believe in creating a world where transgender voices are heard, respected, and celebrated. is a one and all platform for you to help you out in quitting smoking and drinking by providing personalized consultations and medications making you a step closer to leading a healthy life.',
    buttonLabel: 'Get Started',
    imgstart: 'false',
    img: img,
    alt: 'Doctor',
    dark: true,
    primary: true,
    darkText: false,
};

const About = ({ headline, dark2 }) => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [HomeObject.headline],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            showCursor: false,
        });

        return () => {
            typed.destroy();
        };
    }, [headline]);

    return (
        <AboutContainer>
            <AboutWrapper id="aboutSection">
                <AboutRow>
                    <TextWrapper>
                        <TopLine>{HomeObject.topLine}</TopLine>
                        <Heading><span ref={el} style={{ display: 'inline-block' }} /></Heading>
                        <SubTitle>{HomeObject.description}</SubTitle>
                        <BtnWrap>
                            <Button
                                as={Link}
                                to="/signin"
                              
                                duration={500}
                                exact="true"
                                offset={-80}
                                primary={HomeObject.primary ? 1 : 0}
                                dark={HomeObject.dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                style={{ textDecoration: 'none' }}
                            >{HomeObject.buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    <div>
                        <ImgWrap
                           
                        >
                            <Img src={HomeObject.img} alt={HomeObject.alt} />
                        </ImgWrap>
                    </div>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    );
}

export default About;
