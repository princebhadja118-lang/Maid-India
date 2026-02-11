import { Box, Button, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const booknow = () => {
        const islogged = localStorage.getItem('logged')

        if (islogged === 'true') {
            navigate('/maids')
        } else {
            navigate('/login')
        }
    }

    return (
        <>
            <Box>
                <Box sx={{ bgcolor: 'orange', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 900 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: 600 }}>
                        <Typography variant='h2'>Trusted Maid Services Across India</Typography>
                        <Typography variant="body1" sx={{ fontSize: 20 }}>Professional maid services for cleaning, cooking, babysitting, and elderly care.
                            Verified helpers. Affordable pricing. Reliable service.
                        </Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                            <Typography sx={{ bgcolor: 'navajowhite', p: 1, mr: 2, width: 250, borderRadius: 2, fontSize: 20, display: 'flex', justifyContent: 'center' }} variant="p"><VerifiedOutlinedIcon sx={{ fontSize: 30 }} /> Verified Maids</Typography>
                            <Typography sx={{ bgcolor: 'navajowhite', p: 1, ml: 2, borderRadius: 2, fontSize: 20, display: 'flex', justifyContent: 'center' }} variant="p"><CurrencyRupeeOutlinedIcon sx={{ fontSize: 30 }} /> Affordable</Typography>
                            <Typography sx={{ bgcolor: 'navajowhite', p: 1, mr: 2, borderRadius: 2, fontSize: 20, display: 'flex', justifyContent: 'center' }} variant="p"><TaskAltIcon sx={{ fontSize: 30 }} /> 24/7 Support</Typography>
                        </Box>
                        <Button sx={{ mt: 5, fontSize: 22, fontWeight: 'bold', color: '#fff', bgcolor: '#000', borderRadius: 10, height: 60, width: 300, "&:hover": { background: "black", color: 'white' } }} onClick={booknow}>Book Now</Button>
                    </Box>
                    <img src='/src/assets/HomeMaidPhoto.jpg' style={{ height: 900 }} alt='Home Main' />
                </Box>
            </Box>
        </>
    )
}

export default Home