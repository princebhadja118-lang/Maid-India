import { AppBar, Typography, Button, Box, Container, Toolbar, Link } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
    const isloged = localStorage.getItem('logged')


    const logout = () => {
        localStorage.removeItem('logged')
        navigate('/')
    }

    return (
        <AppBar sx={{ bgcolor: '#FFF7E6' }}>
            <Container>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ height: 55, width: 60, borderRadius: 7 }} src='src/assets/Maidlogo.png' />
                        <Typography variant="h4" sx={{ pl: 2, color: 'black' }}>Maid India</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'right', gap: 2 }}>
                        <Button sx={{ color: 'black', fontSize: 17 }} href='/'>Home</Button>
                        <Button sx={{ color: 'black', fontSize: 17 }} href='/services'>Services</Button>
                        <Button sx={{ color: 'black', fontSize: 17 }} href='/maids'>Maids</Button>
                    </Box>
                    <Box>
                        {!isloged && (<Button sx={{ bgcolor: 'black', color: 'white', fontSize: 17 }} onClick={() => navigate('/login')}>Login</Button>)}
                        {isloged && (<Button sx={{ bgcolor: 'black', color: 'white', fontSize: 17 }} onClick={logout}>Logout</Button>)}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar