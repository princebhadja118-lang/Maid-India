import { Box, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const BookingForm = ({ onSubmit }) => {

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
            <Modal

            >
                <Box>
                    <Typography variant="h4">Booking Details</Typography>
                    <TextField
                        label='Full Name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    >

                    </TextField>
                </Box>
            </Modal>
        </>
    )
}

export default BookingForm