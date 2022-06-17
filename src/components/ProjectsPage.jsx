import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, Button, Stack, List, ListItem, useMediaQuery, } from '@mui/material'
import React from 'react'
import cryptoTrackerPic1 from '../images/cryptoTrackerPic1.PNG'
import blogPic1 from '../images/blogPic1.PNG'
import { useInView } from 'react-intersection-observer';
import { Zoom } from 'react-reveal';
import {motion} from "framer-motion";
import Rotate from 'react-reveal/Rotate';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';

export default function ProjectsPage(props) {

const { ref: ProjectsRef, inView: projectsVisible, } = useInView();

const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));
const buttonProps = {
    size: isSmallScreen ? "small" : "large"
  };
   
    return (
         <>
         <Box ref={props.refProp2} sx={{mb:"5%", pt:"-2%"}}></Box> 
        <Container ref={ProjectsRef} sx={{display: "flex", justifyContent: "center", mt: {xs:"24%", sm:"18%"}, flexDirection: "column", alignItems: "center", visibility: projectsVisible ? "unset" : "hidden" }}>           
            <Zoom left > <Typography  sx={{mb:"10%", fontFamily:"Cormorant, serif", fontWeight:"600",}} variant={isSmallScreen ? 'h2' : 'h1'}> Projects</Typography> </Zoom>
            <Box sx={{display:"flex",  alignItems:"center", mb:"10%", ml:"0%", }}> 
            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", mr:"5%" }} container spacing={isSmallScreen ? 7 : 14}>
                <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", }} item xs={6}>
                        <motion.div 
                            whileHover={{scale: 1.1}}>
                            <Zoom> 
                        <Typography variant={isSmallScreen ? 'h5':'h4'}> Blockchain Tech Blog</Typography>
                        </Zoom> 
                        <Rotate bottom right> 
                    <Card sx={{width:{xs:"102%", sm:"95%", md:"100%"}, display:"flex", flexDirection:"column",  mt:"3%", backgroundColor:"#dae0e0",  "&:hover": { boxShadow:"0 4px 15px 0 rgba(45, 54, 65, 0.75)"}}}>
                        <CardMedia height="290" component="img" image={blogPic1} />
                        <CardContent sx={{display:"flex", justifyContent:"center", flexDirection:"column", mt:"1%", backgroundColor: "#dae0e0"}}>
                            <Stack sx={{justifyContent:"center", alignItems:"center", mb:"3%", }}>
                                <Typography sx={{mb:"3%"}} variant={isSmallScreen ? 'h5':'h4'}>Skills Displayed:</Typography>
                                <Box sx={{justifyContent:"flex-start",  width:"90%"}}>
                                    <Grid container spacing={6}>
                                        <Grid item xs={6}> 
                                    <Typography sx={{ display: 'list-item', mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>React JS</Typography>
                                    <Typography sx={{ display: 'list-item', mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>Material UI</Typography>
                                    <Typography sx={{ display: 'list-item', wordWrap:"break-word", mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>User Authentication</Typography>    
                                        </Grid> 
                                        <Grid item xs={6}>
                                            <List sx={{listStyleType:'disc'}}> 
                                 <Typography sx={{ display: 'list-item', mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>React JS</Typography> 
                                  <Typography sx={{ display: 'list-item', mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>React JS</Typography> 
                                 <Typography sx={{ display: 'list-item', mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>React JS</Typography>             
                                        </List>     
                                        </Grid> 
                                    </Grid> 
                                </Box>
                            </Stack>
                            <Box sx={{display:"flex", justifyContent:"space-evenly",}}> 
                            <Button {...buttonProps} sx={{mr:"7px", fontFamily:"Montserrat" , fontWeight:"600", ml:"2%", color:"#dae0e0", backgroundColor:"#020004", borderColor:"#dae0e0", "&:hover": {color:"#06000C", backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained' > Live Demo </Button>
                            <Button {...buttonProps} sx={{fontFamily:"Montserrat" ,fontWeight:"600", mr:"2%",color:"#06000C", backgroundColor:"#dae0e0", borderColor:"#020004", "&:hover": { backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained'>View Code</Button>
                            </Box> 
                       </CardContent>
                    </Card>
                    </Rotate> 
                    </motion.div>
                </Grid>

                <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor:"#dae0e0" }} item xs={6}>
                <motion.div whileHover={{scale: 1.1}}>
                    <Zoom> 
                <Typography variant={isSmallScreen ? 'h5':'h4'}> Cryptocurrency Price Tracker </Typography>
                </Zoom>
                <Rotate bottom left>  
                    <Card sx={{width:{xs:"103%", sm:"100%", md:"100%"}, display:"flex", flexDirection:"column", mt:"3%", backgroundColor:"#dae0e0",  "&:hover": { boxShadow:"0 4px 15px 0 rgba(45, 54, 65, 0.75)"} }}>
                        <CardMedia width="290" height="290" component="img" image={cryptoTrackerPic1} />
                        <CardContent sx={{display:"flex", justifyContent:"center", flexDirection:"column", mt:"1%", backgroundColor: "#dae0e0"}}>
                            <Stack sx={{justifyContent:"center", alignItems:"center", mb:"3%", }}>
                                <Typography sx={{mb:"3%"}} variant={isSmallScreen ? 'h5':'h4'}>Skills Displayed:</Typography>
                                <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", width:"90%"}}>
                                    <Grid sx={{display:"flex",  }} container spacing={4}>
                                        <Grid item xs={6}> 
                                    <Typography sx={{ display: 'list-item', mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>React JS</Typography>
                                    <Typography sx={{ display: 'list-item', mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>Material UI</Typography>
                                    <Typography sx={{ display: 'list-item', wordWrap:"break-word", mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>User Authentication</Typography>    
                                        </Grid> 
                                        <Grid item xs={6}>
                                            <List sx={{listStyleType:'disc'}}> 
                                 <Typography sx={{ display: 'list-item', mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>React Hooks</Typography> 
                                  <Typography sx={{ display: 'list-item', mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>Pagination</Typography> 
                                 <Typography sx={{ display: 'list-item', mb:"6%" }} variant={isSmallScreen ? 'h7': "h6"}>CoinGecko API Integration</Typography>             
                                        </List>     
                                        </Grid> 
                                    </Grid> 
                                </Box>
                            </Stack>
                            <Box sx={{display:"flex", justifyContent:"space-around",}}> 
                            <Button {...buttonProps} sx={{mr:"7px", fontFamily:"Montserrat" , fontWeight:"600", ml:"2%", color:"#dae0e0", backgroundColor:"#020004", borderColor:"#dae0e0", "&:hover": {color:"#06000C", backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained' > Live Demo </Button>
                            <Button {...buttonProps} sx={{fontFamily:"Montserrat" ,fontWeight:"600", mr:"2%",color:"#06000C", backgroundColor:"#dae0e0", borderColor:"#020004", "&:hover": { backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained'>View Code</Button>
                            </Box> 
                       </CardContent>
                    </Card>
                    </Rotate>
                    </motion.div>
                </Grid>
            </Grid>
            </Box>
        </Container>
        </>
    )
}
