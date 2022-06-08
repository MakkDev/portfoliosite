import React from 'react'
import {Container, Box, Typography, Paper, Card, Stack, Grid} from '@mui/material'
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer';


export default function SkillsPage() {

    const { ref: SkillsRef, inView: skillsVisible, } = useInView();
    const { ref: SkillsImgRef, inView: skillsImgVisible, } = useInView();

  return (
      <> 
        <Box ref={SkillsRef} sx={{mt:"10%",width:"100%", display:'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Typography sx={{mb:"4%",display:"flex", justifyContent:"center"}} variant="h1" color="initial">
            {skillsVisible ? <Zoom left cascade> 
            Skills
            </Zoom> : ""}
            </Typography>
    <Box ref={SkillsImgRef}>
    
      {skillsImgVisible ? <LightSpeed > 
             <Grid  sx={{width:"100%"}} container spacing={3}>
             <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant='h4'> <Zoom left cascade> HTML </Zoom> </Typography> 
                    <img style={{width:"100px"}} src='https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png'/>
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}> 
                    <Typography variant='h4'  > <Zoom left cascade> CSS </Zoom> </Typography> 
                    <img style={{width:"100px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'/> 
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant='h4'> <Zoom left cascade> JavaScript </Zoom> </Typography> 
                    <img style={{width:"100px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'/>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant='h4'> <Zoom left cascade> Material UI </Zoom> </Typography> 
                    <img style={{width:"100px"}} src='https://media.zeemly.com/media/product/material-ui.png'/>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant='h4'> <Zoom left cascade> React JS </Zoom> </Typography> 
                    <img style={{width:"100px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'/>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={4}>
                    <Typography variant='h4'> <Zoom left cascade> Git </Zoom> </Typography> 
                    <img style={{width:"100px"}} src='https://avatars.githubusercontent.com/u/18133?s=200&v=4'/>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={6}>
                    <Typography variant='h4'> <Zoom left cascade> Firebase </Zoom> </Typography> 
                    <img style={{width:"100px"}} src='https://cdn-images-1.medium.com/max/1200/1*ti5CnGh_T4Kqy5aCTLJRcg.png'/>  
               </Grid> 
                <Grid sx={{display:"flex", flexDirection:"column", alignItems:"center"}} item xs={6}>
                    <Typography variant='h4'> <Zoom left cascade> Netlify </Zoom> </Typography> 
                    <img style={{width:"100px"}} src='https://www.netlify.com/v3/img/components/logomark.png'/>  
               </Grid>
            </Grid> 
    </LightSpeed> : ""}
    </Box>
    </Box>
    </>
  )
}
