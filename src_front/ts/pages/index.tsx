import React from 'react';
import {Container, Grid, Typography} from '@mui/material';

const Index = () => {
  return (
    <Container>
      <Grid container spacing={3} marginTop={5}>
        <Grid item md={6}>
          <Typography marginTop={2} variant="h3">
            Welcome to Material-UI
          </Typography>
          <Typography variant="body1">
            This is a simple example of using Material-UI components in your application.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
