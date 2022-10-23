import React, { useRef } from 'react'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Header from '../components/Header'
import SkillsPage from '../components/SkillsPage'
import ProjectsPage from '../components/ProjectsPage'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import ScrollArrow from '../components/ScrollArrow'
import Experience from '../components/Experience'

export default function Homepage() {

const skillsRef = useRef();
const projectsRef = useRef();
const contactRef = useRef();
const experienceRef = useRef();

  return (
  <>
  <Navbar refProp4={experienceRef} refProp3={contactRef} refProp2={projectsRef} refProp={skillsRef}/>
  <Header/>
  <SkillsPage refProp={skillsRef} />
  <ProjectsPage refProp2={projectsRef} />
  <Experience refProp4={experienceRef} />
  <Contact refProp3={contactRef}/>
  </>
  )
}
