import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, Button, Stack, } from '@mui/material'
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
   
    return (
         
        <Container ref={ProjectsRef} sx={{display: "flex", justifyContent: "center", mt: "10%", flexDirection: "column", alignItems: "center", visibility: projectsVisible ? "unset" : "hidden" }}>           
            <Zoom left > <Typography ref={props.refProp2} sx={{mb:"5%", fontFamily:"Cormorant, serif", fontWeight:"600",}} variant='h1'> Projects</Typography> </Zoom>
            <Box sx={{display:"flex", alignItems:"center", mb:"10%", }}> 
            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} container spacing={9}>
                <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} item xs={6}>
                        <motion.div whileHover={{scale: 1.15}}>
                            <Zoom> 
                        <Typography variant='h4'> Blockchain Tech Blog</Typography>
                        </Zoom> 
                        <Rotate bottom right> 
                    <Card sx={{display:"flex", flexDirection:"column", mt:"3%", backgroundColor:"#dae0e0",  "&:hover": { boxShadow:"0 4px 15px 0 rgba(45, 54, 65, 0.75)"}}}>
                        <CardMedia height="290" component="img" image={blogPic1} />
                        <CardContent sx={{display:"flex", justifyContent:"center", flexDirection:"column", mt:"1%", backgroundColor: "#dae0e0"}}>
                            <Stack sx={{justifyContent:"center", alignItems:"center", mb:"3%", }}>
                                <Typography variant="h4">Skills Displayed:</Typography>
                                <Box sx={{justifyContent:"flex-start"}}>
                                    <Grid container spacing={6}>
                                        <Grid item xs={6}> 
                                    <Typography variant='h6'>- React JS</Typography>
                                    <Typography variant='h6'>- Material UI</Typography>
                                    <Typography variant='h6'>- User Authentication</Typography>    
                                        </Grid> 
                                        <Grid item xs={6}> 
                                    <Typography variant='h6'>- React JS</Typography>
                                    <Typography variant='h6'>- Material UI</Typography>
                                    <Typography variant='h6'>- User Authentication</Typography>    
                                        </Grid> 
                                    </Grid> 
                                </Box>
                            </Stack>
                            <Box sx={{display:"flex", justifyContent:"space-around",}}> 
                            <Button size='large' sx={{fontFamily:"Montserrat" , fontWeight:"600", ml:"2%", color:"#dae0e0", backgroundColor:"#020004", borderColor:"#dae0e0", "&:hover": {color:"#06000C", backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained' > Live Demo </Button>
                            <Button size='large' sx={{fontFamily:"Montserrat" ,fontWeight:"600", mr:"2%",color:"#06000C", backgroundColor:"#dae0e0", borderColor:"#020004", "&:hover": { backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained'>View Code</Button>
                            </Box> 
                       </CardContent>
                    </Card>
                    </Rotate> 
                    </motion.div>
                </Grid>

                <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor:"#dae0e0" }} item xs={6}>
                <motion.div whileHover={{scale: 1.1}}>
                    <Zoom> 
                <Typography variant='h4'> Cryptocurrency Price Tracker </Typography>
                </Zoom>
                <Rotate bottom left>  
                    <Card sx={{display:"flex", flexDirection:"column", mt:"3%", backgroundColor:"#dae0e0",  "&:hover": { boxShadow:"0 4px 15px 0 rgba(45, 54, 65, 0.75)"} }}>
                        <CardMedia width="290" height="290" component="img" image={cryptoTrackerPic1} />
                        <CardContent sx={{display:"flex", justifyContent:"center", flexDirection:"column", mt:"1%", }}>
                            <Stack sx={{justifyContent:"center", alignItems:"center", mb:"3%"}}>
                                <Typography variant="h4">Skills Displayed:</Typography>
                                <Box sx={{justifyContent:"flex-start"}}> 
                                <Grid container spacing={6}>
                                        <Grid item xs={6}> 
                                    <Typography variant='h6'>- React JS</Typography>
                                    <Typography variant='h6'>- Material UI</Typography>
                                    <Typography variant='h6'>- User Authentication</Typography>    
                                        </Grid> 
                                        <Grid item xs={6}> 
                                    <Typography variant='h6'>- Pagination</Typography>
                                    <Typography variant='h6'>- User Authentication</Typography>    
                                    <Typography variant='h6'>- CoinGecko API Integration</Typography>
                                        </Grid> 
                                    </Grid> 
                                </Box>
                            </Stack>
                            <Box sx={{display:"flex", justifyContent:"space-around",}}> 
                            <Button size='large' sx={{fontFamily:"Montserrat" , fontWeight:"600", ml:"2%", color:"#dae0e0", backgroundColor:"#020004", borderColor:"#dae0e0", "&:hover": {color:"#06000C", backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained' > Live Demo </Button>
                            <Button size='large' sx={{fontFamily:"Montserrat" ,fontWeight:"600", mr:"2%",color:"#06000C", backgroundColor:"#dae0e0", borderColor:"#020004", "&:hover": { backgroundImage: "linear-gradient(to right, #D9BFE6, #B380CC, #8C40B3  )"}}} variant='contained'>View Code</Button>
                            </Box> 
                       </CardContent>
                    </Card>
                    </Rotate>
                    </motion.div>
                </Grid>
            </Grid>
            </Box>
        </Container>
    )
}
