import React, { useRef } from 'react'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Header from '../components/Header'
import SkillsPage from '../components/SkillsPage'
import ProjectsPage from '../components/ProjectsPage'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

export default function Homepage() {

const skillsRef = useRef();

  return (
  <>
  <Navbar refProp={skillsRef}/>
  <Header/>
  <SkillsPage refProp={skillsRef} />
  <ProjectsPage />
  <Contact/>
  </>
  )
}
