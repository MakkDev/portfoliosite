import React from 'react'
import {Grid, Container, Box, CardMedia, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField, useMediaQuery } from '@mui/material'
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
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"));

    const { ref: TitleRef, inView: titleVisible, } = useInView();

    return (
                    <Grid container sx={{mb:"20%", mt:{xs:"8%",sm:"5%"}, display: "flex",  width: "100%", alignItems: "center", justifyContent:"center", flexDirection:{xs: "column-reverse", sm:"column-reverse", md:"row", lg:"row", xl:"row"} }}>
                        <Grid item xs={6}>
                        <RubberBand> 
                            <Box sx={{ml:{xs:"-26%", sm:"-30%", md:"0%"}, mt:{xs:"20%",sm:"5%"}, display:"flex", width:{xs:"140%", sm:"150%", md:"100%", lg:"100%", xl:"100%"}, justifyContent:"center", alignItems:"center"}}>
                        <motion.img transition={{type:"spring"}} whileHover={{y:-20}} style={{marginTop:"4%", width: "140%", justifyContent:"center", }} src={PurpleFace} />
                            </Box> 
                        </RubberBand>
                        </Grid>
                    <Grid sx={{zIndex:"2"}} item xs={6}>
                            <Rotate top > 
                    <Typography ref={TitleRef} variant='h4' sx={{fontFamily:"Cormorant, serif", mb:{xs:"12%", sm:"8%"}, fontWeight:"700", textAlign:"center", ml:"-15%", display: "flex",  fontSize:{xs:"340%", sm:"420%", md:"420%", lg:"490%", xl:"800%"}, flexDirection:"column",   }} >
                          Makk Makkieh </Typography>
                    <Typography variant='h4' sx={{fontFamily:"Cormorant, serif", mb:{xs:"12%", sm:"8%"}, fontWeight:"700", textAlign:"center", ml:"-15%", display: "flex",  fontSize:{xs:"250%", sm:"320%", md:"320%", lg:"360%", xl:"500%"}, flexDirection:"column",   }} >
                     React JS Developer </Typography>
                    <Typography variant='h4' sx={{fontFamily:"Cormorant, serif", mb:"8%", fontWeight:"700", textAlign:"center", ml:"-15%", display: "flex",  fontSize:{xs:"250%", sm:"320%", md:"320%", lg:"360%", xl:"500%"}, flexDirection:"column",   }} >
                    UI Design Enthusiast</Typography>
                            </Rotate>
                        </Grid>
                    </Grid>                
            
    )
}
