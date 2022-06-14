import React from 'react'
import {AppBar, Toolbar, Container, Box, CardMedia, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, Button } from '@mui/material'
import SkillsPage from './SkillsPage';

export default function Navbar(props) {

  const executeSkillsScroll = () => (props.refProp).current.scrollIntoView({behavior: 'smooth'})    
  const executeProjectsScroll = () => (props.refProp2).current.scrollIntoView({behavior: 'smooth',})    
  const executeContactScroll = () => (props.refProp3).current.scrollIntoView({behavior: 'smooth'})    

  return (
    <AppBar sx={{backgroundImage:"linear-gradient(to left, #660099, #8C40B3, #B380CC )"}} position="sticky" >
      <Toolbar>
        <Typography sx={{fontSize:"150%", flex:"1"}} variant="h6">
          Makk.Tech
        </Typography>       
        <Button sx={{fontFamily:"Montserrat" ,fontWeight:"600", mr:"2%",color:"#06000C", backgroundColor:"#dae0e0", borderColor:"#06000C", "&:hover": { backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained' onClick={executeSkillsScroll}> 
        Skills
        </Button>
        <Button sx={{fontFamily:"Montserrat", fontWeight:"600", color:"#06000C", backgroundColor:"#dae0e0", borderColor:"#06000C", "&:hover": { backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained' onClick={executeProjectsScroll}> 
        Projects
        </Button>
        <Button sx={{fontFamily:"Montserrat" , fontWeight:"600", ml:"2%", color:"#dae0e0", backgroundColor:"#06000C", borderColor:"#dae0e0", "&:hover": {color:"#06000C", backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained' onClick={executeContactScroll}> 
         Contact 
        </Button>
      </Toolbar>
    </AppBar>
  )
}
