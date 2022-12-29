import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '../src/layout/copyright';
import Header from '../src/layout/header';

export default function Index() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{my: 4, background: 'red'}}>
          <Typography variant="h4" component="h1" gutterBottom>
            All Pokemon
          </Typography>
        </Box>
        <Copyright />
      </Container>
    </>
  );
}
