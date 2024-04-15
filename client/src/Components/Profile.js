import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Grid, Avatar, Typography, TextField, Button } from '@mui/material';
import Loading from './Loader/Loader';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container sx={{ marginTop: '10%', boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)', marginRight: '10%', marginLeft: '10%', marginBottom: '20%', border: '2px solid #FDA5A4', paddingBottom: '50px', backgroundColor: '#FFF9C4' }}>
      {isAuthenticated && (
        <Grid container spacing={3} sx={{ boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)', textAlign: 'center', marginTop: '50px', paddingTop: '20px', marginLeft: '8%', marginRight: '8%', marginBottom: '2%', borderRadius: '20px', backgroundColor: '#F5F0F0', maxWidth: '100%' }}>
          {isSmallScreen ? (
            <Grid item xs={12} md={4}>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Avatar src={selectedImage || user.picture} alt={user.name} style={{ width: '65%', height: 'auto', borderRadius: '50%', margin: 'auto', backgroundColor: '#FFD180' }} />
                <TextField type="file" accept="image/*" variant="outlined" sx={{ marginTop: 3, backgroundColor: '#FFD180' }} onChange={handleImageChange} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" style={{ color: '#F06292' }}>{user.nickname}</Typography>
                <Typography style={{ color: '#F06292' }}>{user.email}</Typography>
              </Grid>
            </Grid>
          ) : (
            <>
              <Grid item md={4} textAlign="center">
                <Avatar src={selectedImage || user.picture} alt={user.name} sx={{ width: 200, height: 200, margin: 'auto', borderRadius: '50%', backgroundColor: '#FFD180' }} />
                <TextField
                  type="file"
                  accept="image/*"
                  variant="outlined"
                  sx={{ marginTop: 3, backgroundColor: '#FFD180' }}
                  onChange={handleImageChange}
                />
              </Grid>
              <Grid item md={8}>
                <Typography variant="h4" style={{ color: '#F06292' }}>{user.nickname}</Typography>
                <Typography style={{ color: '#F06292' }}>{user.email}</Typography>
              </Grid>
            </>
          )}
        </Grid>
      )}
    </Container>
  );
};

export default Profile;
