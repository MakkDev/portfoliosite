import React from 'react'
import {AppBar, Toolbar, Container, Box, CardMedia, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Button, useMediaQuery } from '@mui/material'
import SkillsPage from './SkillsPage';
import makktech from '../images/makktech.png';

export default function Navbar(props) {

  const executeSkillsScroll = () => (props.refProp).current.scrollIntoView({behavior: 'smooth'})    
  const executeProjectsScroll = () => (props.refProp2).current.scrollIntoView({behavior: 'smooth',})    
  const executeContactScroll = () => (props.refProp3).current.scrollIntoView({behavior: 'smooth'})    
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));

  return (
    <AppBar sx={{backgroundImage:"linear-gradient(to left, #660099, #8C40B3, #B380CC )"}} position="sticky" >
      <Toolbar>
        <Typography sx={{ fontSize: isSmallScreen ? "100%" : "150%",flex:"1", fontFamily:"Montserrat" ,fontWeight:"600"}}>
          Makk.Tech
        </Typography>       
        <Button size={isSmallScreen ? "small" : "medium"} sx={{fontFamily:"Montserrat" ,fontWeight:"600", mr:"2%",color:"#06000C", backgroundColor:"#dae0e0", borderColor:"#06000C", "&:hover": { backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained' onClick={executeSkillsScroll}> 
        <Typography sx={{fontFamily:"Montserrat", fontWeight:"600", fontSize: isSmallScreen ? "11.5px" : ""}}>Skills </Typography>
        </Button>
        <Button size={isSmallScreen ? "small" : "medium"} sx={{color:"#06000C", backgroundColor:"#dae0e0", borderColor:"#06000C", "&:hover": { backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained' onClick={executeProjectsScroll}> 
        <Typography sx={{fontFamily:"Montserrat", fontWeight:"600", fontSize: isSmallScreen ? "11.5px" : ""}}>Projects </Typography>
        </Button>
        <Button size={isSmallScreen ? "small" : "medium"} sx={{fontFamily:"Montserrat" , fontWeight:"600", ml:"2%", color:"#dae0e0", backgroundColor:"#06000C", borderColor:"#dae0e0", "&:hover": {color:"#06000C", backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained' onClick={executeContactScroll}> 
        <Typography sx={{fontFamily:"Montserrat", fontWeight:"600", fontSize: isSmallScreen ? "11.5px" : ""}}>Contact </Typography> 
        </Button>
      </Toolbar>
    </AppBar>
  )
}
