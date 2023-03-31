import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Map from './Map'

function MapContainer() {
  return (
    <Container maxWidth={'xl'} sx={{mb:"-500px", backgroundColor: "#000E", height:"1000px", pt:"20px"}}>
        <Box sx={{m:"10px"}}>
            <Typography variant='h2' sx={{color: "#ed6c02", fontSize:"22px", fontFamily:'Quicksand, sans-serif !important'}}>Sucursales</Typography>
        </Box>
        <Grid container sx={{m:"0 auto",mt:"30px", p:"15px", width:"90%", height:"500px", border:"1px solid #EEE", backgroundColor:"#0005"}}>
            <Grid item xs={12} sx={{textAlign:"center"}}>
                <Typography variant='h3' sx={{color: "#ed6c02", fontSize:"24px", fontFamily:'Quicksand, sans-serif !important'}}>Gran Buenos Aires</Typography>
            </Grid>
            <Grid item xs={12} sx={{height:"100%", width:"70%", display:"flex", alignItems:"center"}}>
                <Map center={{lat:-34.57626090640626, lng:-58.4255058094669}} zoom={12} style={{height: '90%', width: '100%'}}></Map>
            </Grid>
        </Grid>
    </Container>
  )
}

export default MapContainer