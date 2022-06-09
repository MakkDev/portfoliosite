import React from 'react'
import {Grid, Container, Box, CardMedia, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField } from '@mui/material'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeOut, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import SkillsPage from '../components/SkillsPage'
import LightSpeed from 'react-reveal/LightSpeed';
import PurpleFace from '../images/PurpleFace.png'
import { useInView } from 'react-intersection-observer';
import { MotionConfig } from 'framer-motion';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import {motion} from "framer-motion";



export default function Header() {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <ScrollContainer>
            <ScrollPage style={{ width: "100%" }} page={0}>
                <Animator>
                    <Grid container sx={{mt:"7%", display: "flex",  width: "100%", alignItems: "center", justifyContent:"center", flexDirection:{xs: "column-reverse", sm:"column-reverse", md:"row", lg:"row", xl:"row"} }}>
                        <Grid item xs={6}>
                        <RubberBand> 
                            <Box sx={{ml:{xs:"-40%", sm:"-30%", md:"0%"}, display:"flex", width:{xs:"180%", sm:"150%", md:"100%", lg:"100%", xl:"100%"}, justifyContent:"center", alignItems:"center"}}>
                        <motion.img whileHover={{y:-20}} style={{marginTop:"4%", width: "140%", justifyContent:"center" }} src={PurpleFace} />
                            </Box> 
                        </RubberBand>
                        </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h4' sx={{textAlign:"center", ml:"-15%", display: "flex", fontSize:{xs:"250%", sm:"250%", md:"320%", lg:"320%", xl:"400%"}, flexDirection:"column" }}>
                            <Zoom right cascade duration={2000}> Abdullah Makkieh </Zoom> 
                            <br/>
                            <Zoom right cascade duration={2000}> Junior React JS Developer</Zoom>
                            <br/>
                            <Zoom right cascade duration={2000}>UX Design Enthusiast</Zoom>
                            <br/>
                        </Typography>
                        </Grid>
                    </Grid>
                </Animator>
            </ScrollPage>
            <ScrollPage page={1}>
                <SkillsPage />
            </ScrollPage>
            <ScrollPage page={2}>
                <Animator animation={ZoomInScrollOut}>

                </Animator>
            </ScrollPage>
        </ScrollContainer>
    )
}
