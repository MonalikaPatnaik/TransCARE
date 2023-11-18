import { Box, Typography, ButtonBase, Button, Grid } from "@mui/material";
import React from "react";
import heart1 from "../../../images/heart1.png";
import "../AboutUs/AboutUs.css";
const AboutUs = () => {
  return (
    <Box id='about'
      sx={{
        display: "flex",
        flexDirection: { base: "column-reverse", md: "row", lg: "row" },
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundColor: "#fff",
        backgroundBlendMode: "overlay",
        color: "white",
        filter: "drop-shadow(0px 7px 4px rgba(0, 0, 0, 0))",
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
          borderRadius:"30px",
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
          py: 8,
          px: { xs: 4, md: 10 },
          maxW: "1100px",
          backdropFilter: "blur(50px) backdropSaturate(200%)",
          background: "linear-gradient(#fff 0 0) padding-box, linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red) border-box",
          // backgroundImage: `url(${heroimg})`,
          border: "3px solid transparent",
          borderRadius:"29px",
          overflow: "hidden",
          textAlign: "left",
          color: "#000",
          display: "flex",
          flexDirection: "column",
          height: "auto", 
          
    // backgroundPosition: "left",
    // backgroundRepeat: "no-repeat",
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
      Welcome to TransCare - Empowering Lives!

         <br /> <br />
         </Typography>
         <Typography variant="body1" fontWeight={200} fontSize={{ xs: "12px", sm:"12px", md: "17px" }} fontFamily="Georgia">
         TransCARE is an initiative committed to providing support and inclusivity for marginalized genders, specifically transgenders by offering them valuable resources, fostering meaningful connections, and encouraging self-acceptance. The mission of the project is to create an empowering online platform that facilitates access to information, community engagement, and open discussions. TransCARE believes that everyone, regardless of their gender identity, deserves to have their voice heard, respected, and celebrated. 

           <br/><br/>
           Our aim is to create a supportive and enriching environment for the transgender community, fostering personal growth, connection, and empowerment.

           <br/> <br/>
           Join us at TransCare 🏳️‍🌈 to Open up about Homosexuality  
            by contributing, inspiring and 
           empowering every individual!
         </Typography>
    </Grid>
    <Grid item>
    </Grid>
</Grid>
<Grid item sx={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <ButtonBase  sx={{
            backgroundImage: `url(${heart1})`,
             backgroundSize: "cover",
             backgroundBlendMode: "overlay",
             borderRadius: {xs:"9px", sm:"19px", md:"29px"},
             height: {xs:"40vh", sm:"40vh", md:"50vh"},
             width: {xs:"40vh", sm:"40vh", md:"50vh"},
             marginLeft: { xs: 0, md: "20px" }, 
             animation: "scale 2.5s ease-in-out infinite",
    '@keyframes scale': {
      '0%': {
        transform: 'scale(1)',
      },
      '50%': {
        transform: 'scale(1.1)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
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