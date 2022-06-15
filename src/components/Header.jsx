import React from 'react'
import {Grid, Container, Box, CardMedia, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField } from '@mui/material'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeOut, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import SkillsPage from '../components/SkillsPage'
import LightSpeed from 'react-reveal/LightSpeed';
import PurpleFace from '../images/PurpleFace.png';
import { useInView } from 'react-intersection-observer';
import { MotionConfig } from 'framer-motion';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import Rotate from 'react-reveal/Rotate';
import {motion} from "framer-motion";



export default function Header() {
    const { ref: TitleRef, inView: titleVisible, } = useInView();

    return (
                    <Grid container sx={{mb:"20%",mt:"5%", display: "flex",  width: "100%", alignItems: "center", justifyContent:"center", flexDirection:{xs: "column-reverse", sm:"column-reverse", md:"row", lg:"row", xl:"row"} }}>
                        <Grid item xs={6}>
                        <RubberBand> 
                            <Box sx={{ml:{xs:"-40%", sm:"-30%", md:"0%"}, display:"flex", width:{xs:"140%", sm:"150%", md:"100%", lg:"100%", xl:"100%"}, justifyContent:"center", alignItems:"center"}}>
                        <motion.img transition={{type:"spring"}} whileHover={{y:-20}} style={{marginTop:"4%", width: "140%", justifyContent:"center", }} src={PurpleFace} />
                            </Box> 
                        </RubberBand>
                        </Grid>
                    <Grid sx={{zIndex:"2"}} item xs={6}>
                            <Rotate top > 
                    <Typography ref={TitleRef} variant='h4' sx={{fontFamily:"Cormorant, serif", mb:"8%", fontWeight:"700", textAlign:"center", ml:"-15%", display: "flex",  fontSize:{xs:"250%", sm:"420%", md:"420%", lg:"490%", xl:"800%"}, flexDirection:"column",   }} >
                          Abdullah Makkieh </Typography>
                    <Typography variant='h4' sx={{fontFamily:"Cormorant, serif", mb:"8%", fontWeight:"700", textAlign:"center", ml:"-15%", display: "flex",  fontSize:{xs:"250%", sm:"320%", md:"320%", lg:"360%", xl:"500%"}, flexDirection:"column",   }} >
                    Junior React JS Developer </Typography>
                    <Typography variant='h4' sx={{fontFamily:"Cormorant, serif", mb:"8%", fontWeight:"700", textAlign:"center", ml:"-15%", display: "flex",  fontSize:{xs:"250%", sm:"320%", md:"320%", lg:"360%", xl:"500%"}, flexDirection:"column",   }} >
                    UX Design Enthusiast</Typography>
                            </Rotate>
                        </Grid>
                    </Grid>                
            
    )
}
