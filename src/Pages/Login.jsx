import React, { useState } from 'react'
import { Box, Button, Paper, TextField, Typography, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'

const Login = () => {

    const [regData, setRegData] = useState({ regName: '', regEmail: '', regPass: '' })
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const [rError, setRError] = useState({ Rname: '', Remail: '', Rpass: '' })
    const [logerror, setLogError] = useState({ email: '', pass: '', general: '' })
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

    const logvalidation = () => {
        const newError = { email: '', pass: '', general: '' }
        if (!userEmail.trim()) newError.email = 'Email is required'
        if (!userPass) newError.pass = 'Password is required'
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



    return (
        <>
            <Box sx={{ pt: 10, display: 'flex', justifyContent: 'center', bgcolor: 'orange', height: 600 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <IconButton
                        sx={{ bgcolor: !showForms ? 'lightgreen' : '#fff', color: '#000', borderRadius: 0, width: 150, height: 200, ':hover': { bgcolor: !showForms ? 'lightgreen' : '#fff', color: '#000' }, display: 'flex', flexDirection: 'column' }}
                        onClick={() => setShowForms(false)}
                    >
                        <AccountCircleIcon />
                        Login
                    </IconButton>
                    <IconButton
                        sx={{ bgcolor: showForms ? 'lightgreen' : '#fff', color: '#000', borderRadius: 0, width: 150, height: 200, borderTop: 'none', ':hover': { bgcolor: showForms ? 'lightgreen' : '#fff', color: '#000' }, display: 'flex', flexDirection: 'column' }}
                        onClick={() => setShowForms(true)}
                    >
                        <BorderColorOutlinedIcon />
                        Register
                    </IconButton>
                </Box>

                {!showForms && (
                    <Paper sx={{ borderLeft: '1px solid gray', width: '100%', maxWidth: 600, borderRadius: 0, height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 2, gap: 2 }}>
                        <Typography variant="h5">Login to your account</Typography>
                        <Typography variant="p" color='gray'>Welcome back! Please enter your details.</Typography>
                        <TextField
                            label='Email'
                            type='email'
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            error={!!logerror.email}
                            helperText={logerror.email}
                            fullWidth
                        />
                        <TextField
                            label='Password'
                            type='password'
                            value={userPass}
                            onChange={(p) => setUserPass(p.target.value)}
                            error={!!logerror.pass}
                            helperText={logerror.pass}
                            fullWidth
                        />
                        {logerror.general && <Typography color="error" sx={{ mb: 2 }}>{logerror.general}</Typography>}
                        <Button sx={{ bgcolor: 'black', color: 'white', height: 40 }} onClick={logsuccess} fullWidth> Sign In</Button>
                        <Typography fontSize={16} color='gray'>
                            New here? Create an account
                        </Typography>
                    </Paper>
                )}


                {showForms && (
                    <Paper sx={{ borderLeft: '1px solid gray', width: '100%', maxWidth: 600, borderRadius: 0, height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', p: 2, gap: 2 }}>
                        <Typography variant="h5">Create Account</Typography>
                        <TextField
                            label="Name"
                            value={regData.regName}
                            onChange={(n) => setRegData({ ...regData, regName: n.target.value })}
                            error={!!rError.Rname}
                            helperText={rError.Rname}
                            fullWidth
                        />
                        <TextField
                            label='Email'
                            type='email'
                            value={regData.regEmail}
                            onChange={(e) => setRegData({ ...regData, regEmail: e.target.value })}
                            error={!!rError.Remail}
                            helperText={rError.Remail}
                            fullWidth
                        />
                        <TextField
                            label='Password'
                            type='password'
                            value={regData.regPass}
                            onChange={(p) => setRegData({ ...regData, regPass: p.target.value })}
                            error={!!rError.Rpass}
                            helperText={rError.Rpass}
                            fullWidth
                        />
                        <Button sx={{ bgcolor: 'black', color: 'white', height: 40 }} onClick={regStoreData} fullWidth>Register</Button>
                    </Paper>
                )}
            </Box>
        </>
    )
}

export default Login