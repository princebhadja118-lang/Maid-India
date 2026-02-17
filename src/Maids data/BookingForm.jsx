import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const BookingForm = ({ openBookingForm, setOpenBookingForm, setBookings }) => {

    const [formData, setFormData] = useState({ address: '', date: '', time: '' })
    const [error, setError] = useState({ address: '', date: '', time: '' })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const checkFormvalue = () => {

        const newError = { address: '', date: '', time: '' }

        if (!formData.address.trim()) newError.address = 'Address Requird'
        else if (!formData.date.trim()) newError.date = 'Date Requird'
        else if (!formData.time.trim()) newError.time = 'Time Requird'
        else setOpenBookingForm(false) || setFormData({ ...formData, address: '', date: '', time: '' })

        setError(newError)
        return !(newError.address || newError.date || newError.time)
    }

    return (
        <>
            <Modal open={openBookingForm} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2, width: 500, bgcolor: 'white' }}>
                    <Typography sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} variant="h4">Booking Form</Typography>
                    <TextField
                        label='Full Name'
                        value={localStorage.getItem('FirstName') + " " + localStorage.getItem('LastName')}
                    />
                    <TextField
                        label='Mobile'
                        type='number'
                        value={localStorage.getItem('Mobile')}
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
                        Book Now
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

export default BookingForm