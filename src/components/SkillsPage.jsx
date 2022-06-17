import React from 'react'
import {Container, Box, Typography, Paper, Card, Stack, Grid, useMediaQuery} from '@mui/material'
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';


export default function SkillsPage(props) {

     const { ref: SkillsRef, inView: skillsVisible, } = useInView();
     const { ref: SkillsImgRef, inView: skillsImgVisible, } = useInView();
     const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));

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
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width: isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src='https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png'/>
                    </Box>
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}> 
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > CSS </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}> 
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer", "&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'/>
                    </Box>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > JavaScript </Zoom></Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'/>  
                    </Box>
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > Material UI </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}> 
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src='https://media.zeemly.com/media/product/material-ui.png'/>
                    </Box>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > React JS </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}> 
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'/>
                    </Box>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > Git </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>  
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src='https://avatars.githubusercontent.com/u/18133?s=200&v=4'/>
                    </Box>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={6}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > Firebase </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>  
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src='https://cdn-images-1.medium.com/max/1200/1*ti5CnGh_T4Kqy5aCTLJRcg.png'/>
                    </Box>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={6}>
                    <Typography variant={isSmallScreen ? 'h5' :'h4'}> <Zoom left > Netlify </Zoom> </Typography>
                    <Box sx={{"&:hover" : {filter: "drop-shadow(0 0 0.5rem black)"}}}>  
                    <motion.img transition={{type:"spring"}} whileHover={{y:10}} style={{marginTop:"1%", width:isSmallScreen ? "70px" : "100px", cursor:"pointer"}} src='https://www.netlify.com/v3/img/components/logomark.png'/>
                    </Box>  
               </Grid>
            </Grid> 
    </LightSpeed> 
    </Box>
    </Box>
    
    </>
  )
}
