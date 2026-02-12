import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const BookingForm = ({ openBookingForm, setOpenBookingForm, setBookings }) => {

    const [formData, setFormData] = useState({ name: '', mobile: '', address: '', date: '', time: '' })
    const [error, setError] = useState({ name: '', mobile: '', address: '', date: '', time: '' })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const checkFormvalue = () => {

        const newError = { name: '', mobile: '', address: '', date: '', time: '' }

        if (!formData.name.trim()) newError.name = "Name Requied"
        else if (!formData.mobile.trim()) newError.mobile = "Mobile Requird"
        else if (formData.mobile.length !== 10) newError.mobile = "Enter 10 Digits"
        else if (!formData.address.trim()) newError.address = 'Address Requird'
        else if (!formData.date.trim()) newError.date = 'Date Requird'
        else if (!formData.time.trim()) newError.time = 'Time Requird'
        else setOpenBookingForm(false) || setFormData({ ...formData, name: '', mobile: '', address: '', date: '', time: '' })

        setError(newError)
        return !(newError.name || newError.mobile || newError.address || newError.date || newError.time)
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
                        error={!!error.name}
                        helperText={error.name}
                    />
                    <TextField
                        label='Mobile'
                        name='mobile'
                        type='number'
                        value={formData.mobile}
                        onChange={handleChange}
                        error={!!error.mobile}
                        helperText={error.mobile}
                    />
                    <TextField
                        label='Address'
                        name='address'
                        type='address'
                        value={formData.address}
                        onChange={handleChange}
                        error={!!error.address}
                        helperText={error.address}
                    />
                    <TextField
                        name='date'
                        type='date'
                        value={formData.date}
                        onChange={handleChange}
                        error={!!error.date}
                        helperText={error.date}
                    />
                    <TextField
                        type='time'
                        name='time'
                        value={formData.time}
                        onChange={handleChange}
                        error={!!error.time}
                        helperText={error.time}
                    />
                    <Button
                        sx={{ bgcolor: 'black', color: 'white' }}
                        onClick={() => checkFormvalue()}
                    >
                        Book
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default BookingForm