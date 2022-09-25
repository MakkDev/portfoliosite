import React from 'react'
import {Container, Box, Typography, Paper, Card, Stack, Grid, useMediaQuery} from '@mui/material'
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import GitLogo from '../images/GitLogo.png';
import ReactLogo from '../images/ReactLogo.png';
import MUILogo from '../images/MUILogo.png';
import JavascriptLogo from '../images/JavascriptLogo.png';
import FireBaseLogo from '../images/FireBaseLogo.png';
import NetlifyLogo from '../images/NetlifyLogo.png';
import HTMLLogo from '../images/HTMLLogo.png';
import CSSLogo from '../images/CSSLogo.png';
import CanvaLogo from '../images/CanvaLogo.png';
import JestLogo from '../images/JestLogo.png';
import TSLogo from '../images/TSLogo.png';



export default function SkillsPage(props) {

     const { ref: SkillsRef, inView: skillsVisible, } = useInView();
     const { ref: SkillsImgRef, inView: skillsImgVisible, } = useInView();
     const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));
     const skills = [{skillName:"", skillImage:{}}] 
  return (
      <> 
          <Box sx={{mt:"-10%", pt:"-2%"}} ref={props.refProp}></Box>          
        <Box ref={SkillsRef} sx={{mt:{xs:"44%" ,sm:"27%"}, mb:"12%", width:"100%", display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center", visibility: skillsVisible ? "unset" : "hidden"}}>
        <Typography sx={{mb:"4%",display:"flex", justifyContent:"center", fontFamily:"Cormorant, serif", fontWeight:"600", textAlign:"center"}} variant={isSmallScreen ? 'h2' : 'h1'} >
             <Zoom left> 
                Skills & Technologies
            </Zoom> </Typography> 
            
            <br/>
    <Box ref={SkillsImgRef} sx={{visibility: skillsImgVisible ? "unset" : "hidden"}}>
    
       <LightSpeed > 
             <Grid sx={{width:"100%"}} container spacing={3}>
             <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > HTML </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>  
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width: isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src={HTMLLogo}/>
                    </Box>
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}> 
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > CSS </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}> 
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer", "&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}} src={CSSLogo}/>
                    </Box>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > JavaScript </Zoom></Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src={JavascriptLogo}/>  
                    </Box>
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > React JS </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}> 
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src={ReactLogo}/>
                    </Box>  
               </Grid>
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > Material UI </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}> 
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src={MUILogo}/>
                    </Box>  
               </Grid> 
               <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > TypeScript </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>  
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src={TSLogo}/>
                    </Box>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > Git </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>  
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src={GitLogo}/>
                    </Box>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > Firebase </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>  
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src={FireBaseLogo}/>
                    </Box>  
               </Grid>
               <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > Jest </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>  
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "80px" : "120px", cursor:"pointer"}} src={JestLogo}/>
                    </Box>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={6}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > Netlify </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>  
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src={NetlifyLogo}/>
                    </Box>  
               </Grid>
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={6}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > Canva </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>  
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src={CanvaLogo}/>
                    </Box>  
               </Grid>
                
            </Grid> 
    </LightSpeed> 
    </Box>
    </Box>
    
    </>
  )
}
