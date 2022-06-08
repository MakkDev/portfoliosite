import React from 'react'
import {Container, Box, CardMedia, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField } from '@mui/material'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeOut, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import SkillsPage from '../components/SkillsPage'
import LightSpeed from 'react-reveal/LightSpeed';
import PurpleFace from '../images/PurpleFace.png'
import { useInView } from 'react-intersection-observer';




export default function Header() {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

  return (
      <ScrollContainer>
      <ScrollPage style={{width:"100%"}} page={0}>
          <Animator animation={FadeUp}> 
          <Box sx={{display:"flex", justifyContent:"center",width:"100%"}}> 
    <img style={{width:"120%"}} src={PurpleFace}/>
</Box>  
          </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
          
          <SkillsPage/>  
          
      </ScrollPage>
      <ScrollPage page={2}>
          <Animator animation={ZoomInScrollOut}> 

          </Animator>
      </ScrollPage>
  </ScrollContainer>
)
}
