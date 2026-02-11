import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { maiddetails } from './MaidDetails'
import { Badge, Box, Button, Card, CardContent, Dialog, DialogContent, DialogTitle, IconButton, Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Maids = () => {
    const navigate = useNavigate()
    const [bookMaid, setBookMaid] = useState(0)
    const [bookedMaids, setBookedMaids] = useState([])
    const [openBook, setOpenBook] = useState(false)

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("bookedMaids")) || []
        setBookMaid(stored.length)
    }, [])

    const islogged = localStorage.getItem('logged')

    const bookings = JSON.parse(localStorage.getItem("bookedMaids")) || []

    const bookmaid = (maid) => {

        if (islogged !== 'true') {
            navigate('/login')
            return
        }

        const alreadyBooked = bookings.find(m => m.id === maid.id)

        if (alreadyBooked) {
            alert("Already Booked")
            return
        }

        const updated = [...bookings, maid]


        localStorage.setItem("bookedMaids", JSON.stringify(updated))

        setBookMaid(updated.length)
        setBookedMaids(bookings)
    }

    const removemaid = (id) => {
        const updated = bookedMaids.filter(m => m.id !== id);

        setBookedMaids(updated);
        localStorage.setItem("bookedMaids", JSON.stringify(updated))
    }

    return (
        <>
            <Box sx={{ bgcolor: 'orange' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Typography variant="h2" sx={{ width: '95%', display: 'flex', justifyContent: 'center', p: 2, mb: 4, mt: 4 }}>Our Trusted Maids</Typography>
                    <IconButton
                        sx={{ bgcolor: 'white', height: 40, width: 40, ":hover": { bgcolor: 'white' } }}
                        onClick={() => setOpenBook(true)}
                    >
                        <Badge badgeContent={islogged === 'true' ? bookings.length : 0} color='success'>
                            <AddIcon color='active' sx={{ fontSize: 30, fontWeight: 'bold' }} />
                        </Badge>
                    </IconButton>
                </Box>
                <Box sx={{ p: 3, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 2 }}>

                    {maiddetails.map((maid) => (
                        <Card key={maid.id} sx={{ maxWidth: 250 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                                {/* <Typography>{maid.photo}</Typography> */}
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Name: {maid.name}</Typography>
                                <Typography variant="body1">Age: {maid.age}</Typography>
                                <Typography variant="body1">Exp: {maid.experience}</Typography>
                                <Typography variant="body1">City: {maid.city}</Typography>
                                <Typography variant="body1">service: {maid.service}</Typography>
                                <Typography variant="body1">Price: {maid.price}</Typography>
                                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 0.2 }}>Rating: {maid.rating} <Rating defaultValue={maid.rating} precision={0.1} readOnly /></Typography>
                                <Button sx={{ bgcolor: 'black', color: 'white', mt: 2 }} onClick={() => bookmaid(maid)}>Book</Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
                <Dialog open={openBook} onClose={() => setOpenBook(false)} fullWidth>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton sx={{ ml: 0.3, width: '48px', height: '48px' }} onClick={() => setOpenBook(false)}>
                            <ArrowBackIcon />
                        </IconButton>
                        <DialogTitle sx={{ width: '550px', display: 'flex', justifyContent: 'center' }}>Book Maids</DialogTitle>
                    </Box>
                    <DialogContent>
                        {bookings.length === 0 ? (
                            <Typography variant='body1' sx={{ m: 4, display: 'flex', justifyContent: 'center' }}>No Booking yet</Typography>
                        ) : (
                            bookings.map((book) => (
                                <Card key={book.id} sx={{ m: 2 }}>
                                    <CardContent>
                                        <Typography variant="h6">Name: {book.name}</Typography>
                                        <Typography variant="body1">Service: {book.service}</Typography>
                                        <Button sx={{ bgcolor: 'black', color: 'white' }} onClick={() => removemaid(book.id)}>Remove</Button>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                        {bookings.length !== 0 ? (
                            <Button sx={{ ml: 2, bgcolor: 'black', color: 'white', width: '525px' }}>Booking</Button>
                        ) : (
                            null
                        )}

                    </DialogContent>
                </Dialog>
            </Box >
        </>
    )
}
export default Maids