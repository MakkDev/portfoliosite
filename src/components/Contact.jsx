import { TextField, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Zoom } from 'react-reveal'

export default function Contact() {
  return (
    <Box sx={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:'center'}}>
            <Zoom left > <Typography sx={{mb:"5%", fontFamily:"Cormorant, serif", fontWeight:"600",}} variant='h1'>
                Contact</Typography> </Zoom>
        <TextField placeholder='Contact'/>
        <Button/>
     </Box>
  )
}
