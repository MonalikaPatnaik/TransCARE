import React, { useState } from "react";
import { HeroContainer, HeroContent, HeroH1, HeroP } from "./HeroElements";

import { Grid, Typography, Box } from "@mui/material";
import heroImg from "../../../images/heroimg.png";


const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const customH1Styles = {
    background: "-webkit-linear-gradient(120deg, #0aabad 20%, #FF930F 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundSize: "200%",
    backgroundPosition: "50% 50%",
    fontSize: "64px",
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
      src={heroImg}
      alt="hero_image"
      style={{
        width: "100vh",
        height: "auto",
        objectFit: "contain",
        overflow: "hidden",
      }}
    />
  );

  return (
    <>
      <Box  sx={{ position: "relative" }} 
        style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#FAE4CD", width: "100%"}}    
      >
       
        <Grid container 
        style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}
        >
            <Grid item xs={12} md={5} sx={{ backgroundColor: "#FAE4CD" }}>
            <HeroContainer>
              <HeroContent>
                <HeroH1>Welcome to Transcare</HeroH1>
                <Typography
                  variant="h1"
                  color="#ffffe6"
                  // align={}
                  sx={customH1Styles}
                >
                  Web3 World
                </Typography>
                <HeroP>
                  WE STRIVE TO CREATE A COMMUNITY OF STUDENTS PASSIONATE ABOUT
                  BLOCKCHAIN AND WEB3 TECHNOLOGY
                </HeroP>
              </HeroContent>
            </HeroContainer>
        </Grid>
        </Grid>
        <Grid item xs={12} md={7} sx={{ backgroundColor: "#FAE4CD" }}
          style={{display: "flex", justifyContent: "center", alignItems: "left"}}
        >
          {RightSubSectionJSX}
          
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
