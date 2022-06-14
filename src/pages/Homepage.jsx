import React, { useRef } from 'react'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Header from '../components/Header'
import SkillsPage from '../components/SkillsPage'
import ProjectsPage from '../components/ProjectsPage'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import ScrollArrow from '../components/ScrollArrow'

export default function Homepage() {

const skillsRef = useRef();
const projectsRef = useRef();
const contactRef = useRef();

  return (
  <>
  <Navbar refProp3={contactRef} refProp2={projectsRef} refProp={skillsRef}/>
  <Header/>
  <SkillsPage refProp={skillsRef} />
  <ProjectsPage refProp2={projectsRef} />
  <Contact refProp3={contactRef}/>
  </>
  )
}
