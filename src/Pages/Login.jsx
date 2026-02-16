import React, { useState } from 'react'
import { Box, Button, Paper, TextField, Typography, IconButton, ToggleButtonGroup } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'

const Login = () => {

    const [regData, setRegData] = useState({ regName: '', regEmail: '', regPass: '' })
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const [rError, setRError] = useState({ Rname: '', Remail: '', Rpass: '' })
    const [logError, setLogError] = useState({ email: '', pass: '', general: '' })
    const [showForms, setShowForms] = useState(false)

    const navigate = useNavigate()

    const regvalidation = () => {
        const newError = { Rname: '', Remail: '', Rpass: '' }
        if (!regData.regName.trim()) newError.Rname = 'Name is Requird'
        else if (!regData.regEmail.trim()) newError.Remail = 'Email is Requird.'
        else if (!regData.regPass.trim()) newError.Rpass = 'Password is Requird'
        setRError(newError)
        return !(newError.Rname || newError.Remail || newError.Rpass)
    }

    const regStoreData = () => {
        if (!regvalidation()) return
        localStorage.setItem('Name', regData.regName)
        localStorage.setItem('Email', regData.regEmail)
        localStorage.setItem('Pass', regData.regPass)
        setShowForms(false)
        setRegData({ ...regData, regName: '', regEmail: '', regPass: '' })
    }

    const clearRegister = () => {
        setShowForms(false)
        setRegData({ ...regData, regName: '', regEmail: '', regPass: '' })
        setRError({ ...rError, Rname: '', Remail: '', Rpass: '' })
    }

    const logvalidation = () => {
        const newError = { email: '', pass: '', general: '' }
        if (!userEmail.trim()) newError.email = 'Email is required'
        else if (!userPass) newError.pass = 'Password is required'
        setLogError(newError)
        return !newError.email && !newError.pass
    }

    const logsuccess = () => {
        if (!logvalidation()) return
        const storeEmail = localStorage.getItem('Email')
        const storePass = localStorage.getItem('Pass')

        if (!storeEmail || !storePass) {
            setLogError(prev => ({ ...prev, general: 'No account found. Please register first.' }))
        }

        if (userEmail === storeEmail) {
            localStorage.setItem('logged', true)
            navigate('/maids')
        } else {
            setLogError(prev => ({ ...prev, general: 'Wrong credentials. If you are new, please register.' }))
        }
    }

    const clearlogin = () => {
        setShowForms(true)
        setUserEmail('')
        setUserPass('')
        setLogError({ ...logError, email: '', pass: '', general: '' })
    }

    return (
        <>
            <Box sx={{ pt: 5, pb: 5, display: 'flex', justifyContent: 'center', bgcolor: 'orange' }}>
                <Box sx={{ bgcolor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 600, height: 500 }}>

                    <ToggleButtonGroup sx={{ width: '100%', display: 'flex', justifyContent: 'end', mr: 10 }}>
                        <Button sx={{ color: 'black', borderBottom: !showForms ? '2px solid blue' : 'none', borderRadius: 0, fontSize: 18, }} onClick={clearRegister} >
                            Sign in
                        </Button>
                        <Button sx={{ color: 'black', borderBottom: showForms ? '2px solid blue' : 'none', borderRadius: 0, fontSize: 18, }} onClick={clearlogin}>
                            Sign up
                        </Button>
                    </ToggleButtonGroup>


                    {!showForms && (
                        <Box sx={{ width: '100%', maxWidth: 500, borderRadius: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 2, gap: 2 }}>
                            <Typography variant="h5">Login to your account</Typography>
                            <Typography variant="p" color='gray'>Welcome back! Please enter your details.</Typography>
                            <TextField
                                variant='standard'
                                label='Email'
                                type='email'
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                error={!!logError.email}
                                helperText={logError.email}
                                fullWidth
                            />
                            <TextField
                                variant='standard'
                                label='Password'
                                type='password'
                                value={userPass}
                                onChange={(p) => setUserPass(p.target.value)}
                                error={!!logError.pass}
                                helperText={logError.pass}
                                fullWidth
                            />
                            {logError.general && <Typography color="error" sx={{ mb: 2 }}>{logError.general}</Typography>}
                            <Button sx={{ bgcolor: 'black', color: 'white', height: 40, mt: 2 }} onClick={logsuccess} fullWidth> Sign In</Button>
                            <Typography fontSize={16} color='gray'>
                                New here? <Link onClick={() => setShowForms(true)}>Create an account </Link>
                            </Typography>
                        </Box>
                    )}


                    {showForms && (
                        <Box sx={{ width: '100%', maxWidth: 500, borderRadius: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 2, gap: 2 }}>
                            <Typography variant="h5">Create Account</Typography>
                            <TextField
                                variant='standard'
                                label="Name"
                                value={regData.regName}
                                onChange={(n) => setRegData({ ...regData, regName: n.target.value })}
                                error={!!rError.Rname}
                                helperText={rError.Rname}
                                fullWidth
                            />
                            <TextField
                                variant='standard'
                                label='Email'
                                type='email'
                                value={regData.regEmail}
                                onChange={(e) => setRegData({ ...regData, regEmail: e.target.value })}
                                error={!!rError.Remail}
                                helperText={rError.Remail}
                                fullWidth
                            />
                            <TextField
                                variant='standard'
                                label='Password'
                                type='password'
                                value={regData.regPass}
                                onChange={(p) => setRegData({ ...regData, regPass: p.target.value })}
                                error={!!rError.Rpass}
                                helperText={rError.Rpass}
                                fullWidth
                            />
                            <Button sx={{ bgcolor: 'black', color: 'white', height: 40, mt: 2 }} onClick={regStoreData} fullWidth>Register</Button>
                        </Box>
                    )}
                </Box>
            </Box >
        </>
    )
}

export default Login