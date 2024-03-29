import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'


export const Errorr = () => {
  const navigate=useNavigate()
  const backHandle=()=>{
    navigate("/")
}
    return (
        <Box
       
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh'
        }}
      >
      
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="h1">
                404
              </Typography>
              <Typography variant="h6">
                The page you’re looking for doesn’t exist.
              </Typography>
              <Button variant="contained"
              
              onClick={backHandle}>Back Home</Button>
            </Grid>
            <Grid xs={6}>
              <img
                src="https://previews.123rf.com/images/krisdog/krisdog0802/krisdog080200012/2558852-an-illustration-of-a-monkey-in-a-hard-hat-trying-to-fix-a-computer-with-a-hammer-perhaps-a.jpg"
                alt=""
                width={500} height={250}
              />
            </Grid>
          </Grid>
        </Container>  
       
      </Box>
  // https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg
    )
}
