import React, { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, Button, Card, CardContent, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import PaymentForm from './PaymentForm'

const StoreBooking = ({ openDialog, setOpenDialog, bookings, setBookings }) => {


    const [paymentForm, setPaymentForm] = useState(false)

    const islogged = localStorage.getItem('logged')

    const removemaid = (id) => {
        const updated = bookings.filter(m => m.id !== id)

        setBookings(updated)
        localStorage.setItem("bookedMaids", JSON.stringify(updated))
        console.log(islogged)
    }

    return (
        <>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ ml: 0.3, width: '48px', height: '48px' }} onClick={() => setOpenDialog(false)}>
                        <ArrowBackIcon />
                    </IconButton>
                    <DialogTitle sx={{ width: '550px', display: 'flex', justifyContent: 'center' }}>Book Maids</DialogTitle>
                </Box>
                <DialogContent>
                    {bookings.length === 0 || islogged !== "true" ? (
                        <Typography variant='body1' sx={{ m: 4, display: 'flex', justifyContent: 'center' }}>No Booking yet</Typography>
                    ) : (
                        bookings.map((book) => (
                            <Card key={book.id} sx={{ m: 2 }}>
                                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box>
                                        <Typography variant="h6">Name: {book.name}</Typography>
                                        <Typography variant="body1">Service: {book.service}</Typography>
                                    </Box>
                                    <Box>
                                        <Button sx={{ bgcolor: 'black', color: 'white' }} onClick={() => removemaid(book.id)}>Remove</Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        ))
                    )}

                    {bookings.length === 0 || islogged !== "true" ? (
                        null
                    ) : (
                        <Button onClick={() => setPaymentForm(true)} sx={{ ml: 2, bgcolor: 'black', color: 'white', width: '525px' }}>Booking</Button>
                    )}

                </DialogContent>
            </Dialog>

            <PaymentForm
                setPaymentForm={setPaymentForm}
                paymentForm={paymentForm}
            />
        </>
    )
}

export default StoreBooking