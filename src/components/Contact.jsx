import { TextField, Box, Button, Typography, Container } from '@mui/material'
import React from 'react'
import { Zoom } from 'react-reveal'

export default function Contact(props) {
  return (
      <Container sx={{display:"flex", justifyContent:"center" }}> 
    <Box  sx={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"flex", width:"50%" }}>      
            <Zoom left > 
            <Typography ref={props.refProp3} sx={{mb:"5%", fontFamily:"Cormorant, serif", fontWeight:"600",}} variant='h1'>
                Get In Touch </Typography> </Zoom>

            <Typography variant='h5'> Name </Typography>
        <TextField label="Name" placeholder='Name' required/>
        <br/>
            <Typography variant='h5'> Email Address </Typography>
        <TextField label="Email" placeholder='Email Address' required/>
        <br/>
            <Typography variant='h5'> Message </Typography>
        <TextField sx={{}} size='large' label="Message" placeholder='Message' required/>
       
     </Box>
     </Container>
  )
}
