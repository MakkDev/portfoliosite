import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, Button, Stack, List, ListItem, useMediaQuery, } from '@mui/material'
import React from 'react'
import cryptoTrackerPic1 from '../images/cryptoTrackerPic1.PNG'
import blogPic1 from '../images/blogPic1.PNG'
import { useInView } from 'react-intersection-observer';
import { Zoom } from 'react-reveal';
import {motion} from "framer-motion";
import Rotate from 'react-reveal/Rotate';

export default function Experience(props) {
    const { ref: ExperienceRef, inView: projectsVisible, } = useInView();

    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("md"));

      
        return (
             <>
    
             <Box ref={props.refProp4} sx={{mb:"5%", pt:"-2%"}}></Box> 
            <Container ref={ExperienceRef} sx={{display: "flex", justifyContent: "center", mt: {xs:"24%", sm:"16%", md:"10%"}, flexDirection: "column", alignItems: "center", visibility: projectsVisible ? "unset" : "hidden" }}>           
                <Zoom left > <Typography  sx={{mb:"10%", fontFamily:"Cormorant, serif", fontWeight:"600",}} variant={isSmallScreen ? 'h2' : 'h1'}> Experience</Typography> </Zoom>
                <Box sx={{display:"flex",  alignItems:"center", mb:"10%", ml:"0%", }}> 
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", mr:"5%" }} container spacing={isSmallScreen ? 7 : 14}>
                    <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", }} item xs={4}>
                            <motion.div 
                                whileHover={{scale: 1.1}}>
                                <Zoom> 
                            <Typography sx={{ borderRadius:"15%"}} variant={isSmallScreen ? 'h5':'h4'}> Aspire Technology Solutions </Typography>
                            </Zoom> 
                            <Rotate bottom right> 
                        <Card sx={{width:{xs:"102%", sm:"95%", md:"100%"}, display:"flex", flexDirection:"column",  mt:"3%", px:"6%", backgroundImage:"linear-gradient(to left, #8C40B3, #B380CC )",  "&:hover": { boxShadow:"0 4px 15px 0 rgba(45, 54, 65, 0.75)"}}}>
                            
                            <CardContent sx={{display:"flex", justifyContent:"center", flexDirection:"column", mt:"1%", backgroundImage:"linear-gradient(to left, #8C40B3, #B380CC )", px:"5%"}}>
                                <Stack sx={{justifyContent:"center", alignItems:"center", mb:"3%", }}>
                                    <Typography sx={{mb:"3%", }} variant={isSmallScreen ? 'h5':'h4'}>08/21- Present</Typography>
                                    <Typography sx={{mb:"3%", fontFamily:"Cormorant, serif", fontWeight:"600"}} variant={isSmallScreen ? 'h4':'h3'}>Responsiblities:</Typography>
                                    <Typography sx={{alignSelf:"flex-start", display:"list-item"}} variant={isSmallScreen ? 'h7': "h6"}>Developed a shared component library using React, TypeScript, and Sass.</Typography>
                                    <Typography sx={{alignSelf:"flex-start", display:"list-item"}} variant={isSmallScreen ? 'h7': "h6"}>Collaborated with designer to build the UI components with modern UX concept.</Typography>
                                </Stack>
                           </CardContent>
                        </Card>
                        </Rotate> 
                        </motion.div>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", }} item xs={4}>
                            <motion.div 
                                whileHover={{scale: 1.1}}>
                                <Zoom> 
                            <Typography sx={{ borderRadius:"15%"}} variant={isSmallScreen ? 'h5':'h4'}> Plano Sports Authority </Typography>
                            </Zoom> 
                            <Rotate bottom right> 
                        <Card sx={{width:{xs:"102%", sm:"95%", md:"100%"}, display:"flex", flexDirection:"column",  mt:"3%", px:"6%", backgroundImage:"linear-gradient(to left, #8C40B3, #B380CC )",  "&:hover": { boxShadow:"0 4px 15px 0 rgba(45, 54, 65, 0.75)"}}}>
                            
                            <CardContent sx={{display:"flex", justifyContent:"center", flexDirection:"column", mt:"1%", backgroundImage:"linear-gradient(to left, #8C40B3, #B380CC )", px:"5%"}}>
                                <Stack sx={{justifyContent:"center", alignItems:"center", mb:"3%", }}>
                                    <Typography sx={{mb:"3%"}} variant={isSmallScreen ? 'h5':'h4'}>05/20 – 07/21</Typography>
                                    <Typography sx={{mb:"3%", fontFamily:"Cormorant, serif", fontWeight:"600"}} variant={isSmallScreen ? 'h4':'h3'}>Responsiblities:</Typography>
                                    <Typography sx={{alignSelf:"flex-start", display:"list-item"}} variant={isSmallScreen ? 'h7': "h6"}>Implemented new features based on user needs such as a product review module.</Typography>
                                    <Typography sx={{alignSelf:"flex-start", display:"list-item"}} variant={isSmallScreen ? 'h7': "h6"}>Was involved in all phases of web application including design, creation, development, and deployment using HTML5, CSS3, JavaScript, SASS and ReactJS.</Typography>
                                </Stack>
                           </CardContent>
                        </Card>
                        </Rotate> 
                        </motion.div>
                    </Grid>
                    <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", }} item xs={4}>
                            <motion.div 
                                whileHover={{scale: 1.1}}>
                                <Zoom> 
                            <Typography sx={{ borderRadius:"15%"}} variant={isSmallScreen ? 'h5':'h4'}> North Texas Auto Buyers </Typography>
                            </Zoom> 
                            <Rotate bottom right> 
                        <Card sx={{width:{xs:"102%", sm:"95%", md:"100%"}, display:"flex", flexDirection:"column",  mt:"3%", px:"6%", backgroundImage:"linear-gradient(to left, #8C40B3, #B380CC )",  "&:hover": { boxShadow:"0 4px 15px 0 rgba(45, 54, 65, 0.75)"}}}>
                            
                            <CardContent sx={{display:"flex", justifyContent:"center", flexDirection:"column", mt:"1%", backgroundImage:"linear-gradient(to left, #8C40B3, #B380CC )", px:"5%"}}>
                                <Stack sx={{justifyContent:"center", alignItems:"center", mb:"3%", }}>
                                    <Typography sx={{mb:"3%"}} variant={isSmallScreen ? 'h5':'h4'}>05/18 – 02/20</Typography>
                                    <Typography sx={{mb:"3%", fontFamily:"Cormorant, serif", fontWeight:"600"}} variant={isSmallScreen ? 'h4':'h3'}>Responsiblities:</Typography>
                                    <Typography sx={{alignSelf:"flex-start", display:"list-item"}} variant={isSmallScreen ? 'h7': "h6"}>Developed single page applications using React, ES6, webpack and Babel. </Typography>
                                    <Typography sx={{alignSelf:"flex-start", display:"list-item"}} variant={isSmallScreen ? 'h7': "h6"}>Implemented Test Driven Development (TDD) on React applications via unit testing via Jest.</Typography>
                                </Stack>
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
    
