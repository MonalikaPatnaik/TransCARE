import { Box, Typography, ButtonBase, Button, Grid } from "@mui/material";
import React from "react";
import heart from "../../../images/heart.png";
import "../AboutUs/AboutUs.css";
const AboutUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { base: "column-reverse", md: "row", lg: "row" },
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundColor: "#FAE4CD",
        backgroundBlendMode: "overlay",
        color: "white",
        filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.25))",
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none', 
          zIndex:-1,
        }}
      >
        <div className="circle1"/>
        <div className="circle2"/>
        <div className="circle3"/>
        <div className="circle4"/>
        <div className="circle5"/>
        <div className="circle6"/>
        <div className="circle7"/>
        <div className="circle8"/>
        <div className="circle9"/>
        <div className="circle10"/>
        <div className="circle11"/>
        <div className="circle12"/>
        <div className="circle13"/>
        <div className="circle14"/>
        <div className="circle15"/>
        <div className="circle16"/>
        </Box>
      <Box
        flex={1}
        sx={{
          mx: { xs: 3, md: 7 },
          my: 14,
          py: 10,
          px: { xs: 6, md: 16 },
          maxW: "1100px",
          backdropFilter: "blur(50px) backdropSaturate(200%)",
          background: "linear-gradient(45deg, #164863, #1F2F32)",
          borderRadius: "29px",
          overflow: "hidden",
          textAlign: "left",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "auto", 
        }}
      >
<Grid container spacing={2} >
    <Grid item xs={12} sm container sx={{ flexDirection: { xs: 'column', md: 'row', lg:'row' } }}>
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs>
    <Typography variant="h1" fontWeight="bold" fontSize={{ xs: "30px", sm:"40px", md: "50px" }}>
    About Us
      <br /> 
  </Typography>
      <Typography variant="h2" fontWeight="bold" fontSize={{ xs: "18px", sm:"20px", md: "20px" }}>
      Welcome to TransCare - Empowering Transgender Lives!

         <br /> <br />
         </Typography>
         <Typography variant="body1" fontWeight={200} fontSize={{ xs: "10px", sm:"10px", md: "15px" }}>
           At TransCare, we are dedicated to providing a supportive and inclusive online platform for the transgender 
          community. Our purpose is to empower transgender individuals by offering resources, fostering connection, 
           and promoting self-acceptance.We believe in creating a world where transgender voices are heard, respected,
          and celebrated. is a one and all platform for you to help you out in quitting smoking and drinking by 
           providing personalized consultations and medications making you a step closer to leading a healthy life.
           <br/><br/>
           Our aim is to inspire, challenge and motivate passionate innovators, especially women, 
           to pursue their careers in Open Source and develop solutions to current world problems. 
           We believe that together we can make a difference. Participants can work on numerous projects 
           under our guidance. Our skilled mentors will help all the participants in nurturing and 
           polishing their technical skills and contributing to various projects from the comfort of 
           their homes over our fifty-day contribution period.
           <br/> <br/>
           Join us at TransCare 🏳️‍🌈to Open up about Homosexuality  
            by contributing, inspiring and 
           empowering every individual!
         </Typography>
    </Grid>
    <Grid item>
    {/* <Button
        variant="contained"
        href="registrationlink.."
        sx={{
          backgroundColor: "#648E9B",

          color: 'white',
          "&:hover": {
            backgroundColor: "#111B1E", 
            boxShadow: '0px 2px 2px rgba(150, 150, 150, 0.5)',        
          },
        }}
      >
        Register
  </Button> */}
    </Grid>
</Grid>
<Grid item sx={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <ButtonBase  sx={{
            backgroundImage: `url(${heart})`,
             backgroundSize: "cover",
             backgroundBlendMode: "overlay",
             borderRadius: {xs:"9px", sm:"19px", md:"29px"},
             height: {xs:"40vh", sm:"40vh", md:"50vh"},
             width: {xs:"40vh", sm:"40vh", md:"50vh"},
             marginLeft: { xs: 0, md: "20px" }, 
             marginTop: { xs: "20px", md: 0 },
           }}
         />
</Grid>
</Grid>
</Grid>
</Box>
</Box>
)
}
export default AboutUs;