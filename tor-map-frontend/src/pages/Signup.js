import React from 'react';
import { TextField, Button, Typography, Container, Box, CssBaseline, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../assets/logo.jpeg'; // Ensure this path is correct

const Root = styled('div')(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: `url('/background.jpeg') no-repeat center center fixed`,
  backgroundSize: 'cover',
}));

const ContainerStyled = styled(Container)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  width: '100%',
  maxWidth: '400px',
}));

const Signup = ({ handleSignup }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup(); // Call the function passed as a prop
  };

  return (
    <Root>
      <ContainerStyled component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <img src={logo} alt="Logo" style={{ maxWidth: '100px' }} />
        </Box>
        <Typography component="h1" variant="h5" align="center">
          Sign Up
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Sign Up
          </Button>
          <Box sx={{ marginTop: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              Already have an account? <a href="/">Sign In</a>
            </Typography>
          </Box>
        </form>
      </ContainerStyled>
    </Root>
  );
};

export default Signup;