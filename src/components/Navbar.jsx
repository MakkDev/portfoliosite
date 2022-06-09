import React from 'react'
import {AppBar, Toolbar, Container, Box, CardMedia, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField } from '@mui/material'
import SkillsPage from './SkillsPage';

export default function Navbar() {

  const scrollEffect = ( targetRef ) =>{
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <AppBar sx={{backgroundColor:"#660099"}} position="relative" >
      <Toolbar>
        <Typography sx={{fontSize:"150%", flex:"1"}} variant="h6">
          Makk.Tech
        </Typography>
        <Typography onClick = { () =>scrollEffect(<SkillsPage/>) }> 
        Skills
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
