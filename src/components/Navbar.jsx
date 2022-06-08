import React from 'react'
import {AppBar, Toolbar, Container, Box, CardMedia, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, TextField } from '@mui/material'

export default function Navbar() {
  return (
    <AppBar sx={{backgroundColor:"#660099"}} position="fixed" >
      <Toolbar>
        <Typography variant="h6">
          Hi
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
