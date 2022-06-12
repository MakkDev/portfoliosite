import React from 'react'
import {AppBar, Toolbar, Container, Box, CardMedia, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Button } from '@mui/material'
import SkillsPage from './SkillsPage';

export default function Navbar(props) {

  const executeScroll = () => (props.refProp).current.scrollIntoView({behavior: 'smooth'})    

  return (
    <AppBar sx={{backgroundColor:"#660099"}} position="sticky" >
      <Toolbar>
        <Typography sx={{fontSize:"150%", flex:"1"}} variant="h6">
          Makk.Tech
        </Typography>       
        <Button sx={{mr:"2%",backgroundImage: "linear-gradient(to left, #6253e1, #A3A1FF )"}} variant='contained' onClick={executeScroll}> 
        Skills
        </Button>
        <Button sx={{backgroundImage: "linear-gradient(to left, #6253e1, #A3A1FF )"}} variant='contained' onClick={executeScroll}> 
        Projects
        </Button>
        <Button sx={{ml:"2%", backgroundImage: "linear-gradient(to left, #6253e1, #A3A1FF )"}} variant='contained' onClick={executeScroll}> 
        Contact
        </Button>
      </Toolbar>
    </AppBar>
  )
}
