import React, { useState } from "react";
import { HeroContainer, HeroContent, HeroH1, HeroP } from "./HeroElements";

import { Grid, Typography, Box } from "@mui/material";
import rainbow from "../../../images/rainbow.png";



const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const customH1Styles = {
    background: "-webkit-linear-gradient(120deg, #00008B 20%, #FF930F 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundSize: "200%",
    backgroundPosition: "50% 50%",
    alignItems : "center",
    fontSize: "95px",
    fontWeight: "600",
    fontFamily: "Exo 2, sans-serif",
    color: "transparent",
    margin: "0 !important",
    animation: "gradientAnimation 6s ease-in-out infinite",
    "@keyframes gradientAnimation": {
      "0%": {
        backgroundPosition: "0 50%",
      },
      "50%": {
        backgroundPosition: "100% 50%",
      },
      "100%": {
        backgroundPosition: "0 50%",
      },
    },
    "@media screen and (max-width: 480px)": {
      fontSize: "45px",
    },
  };

  const RightSubSectionJSX = (
    // Hero Image
    <img
      src={rainbow}
      alt="hero_image"
      style={{
        width: "100vh",
        margin: "0 auto",
        height: "auto",
        objectFit: "contain",
        overflow: "hidden",
      }}
    />
  );

  return (
    <>
      <Box 
         sx={{ position: "relative" }} 
         style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#FAE4CD", width: "100%" }}>
        <Grid container style={{ width: "100%" }}>
          <Grid item xs={12} md={6} sx={{ backgroundColor: "#FAE4CD" }}>
          
            <HeroContainer>
            
              <HeroContent
                style={{ marginTop: "10vh", marginLeft: "5vw" }}
              >
              <HeroH1
                 style={{color: '#164863' }}
              >Celebrate Yourself</HeroH1>
                <Typography variant="h1" color="#ffffe6" sx={customH1Styles} >
                  STAND 
                </Typography>
                <Typography variant="h1" color="#ffffe6" sx={customH1Styles} >
                  PROUD
                </Typography>
                <HeroP>
                  WE STRIVE TO CREATE A COMMUNITY OF STUDENTS PASSIONATE ABOUT
                  BLOCKCHAIN AND WEB3 TECHNOLOGY
                </HeroP>
              </HeroContent>
            </HeroContainer>
          </Grid>
          <Grid item xs={12} md={6} sx={{ backgroundColor: "#FAE4CD" }} style={{ display: "flex", justifyContent: "center", alignItems: "left" }}>
            {RightSubSectionJSX}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}  
export default HeroSection;
