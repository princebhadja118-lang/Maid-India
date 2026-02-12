import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const BookingForm = ({ openBookingForm, setOpenBookingForm }) => {

    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        address: '',
        date: '',
        time: ''
    })
    const [error, setError] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <Modal open={openBookingForm} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, width: 500, bgcolor: 'white' }}>
                    <Typography variant="h4">Booking Details</Typography>
                    <TextField
                        label='Full Name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label='Mobile'
                        name='mobile'
                        type='number'
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    <TextField
                        label='Address'
                        name='address'
                        type='address'
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <TextField
                        name='date'
                        type='date'
                        value={formData.date}
                        onChange={handleChange}
                    />
                    <TextField
                        type='time'
                        name='time'
                        value={formData.time}
                        onChange={handleChange}
                    />
                    <Button sx={{ bgcolor: 'black', color: 'white' }}>Book</Button>
                </Box>
            </Modal>
        </>
    )
}

export default BookingForm