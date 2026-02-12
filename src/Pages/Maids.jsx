import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { maiddetails } from './MaidDetails'
import { Badge, Box, Button, Card, CardContent, IconButton, Rating } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import StoreBooking from '../Components/StoreBooking'

const Maids = () => {

    const navigate = useNavigate()

    const [bookings, setBookings] = useState([])
    const [openBook, setOpenBook] = useState(false)

    const islogged = localStorage.getItem('logged')

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("bookedMaids")) || []
        setBookings(stored)
    }, [])

    // const bookings = JSON.parse(localStorage.getItem("bookedMaids")) || []

    const bookmaids = (maid) => {

        if (islogged !== 'true') {
            navigate('/login')
            return
        }

        const alreadyBooked = bookings.find(m => m.id === maid.id)

        if (alreadyBooked) {
            alert("Already Hire")
            return
        }

        const updated = [...bookings, maid]

        setBookings(updated)
        localStorage.setItem("bookedMaids", JSON.stringify(updated))
    }



    return (
        <>
            <Box sx={{ bgcolor: 'orange' }} >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <Typography variant="h2" sx={{ width: '95%', display: 'flex', justifyContent: 'center', p: 2, mb: 4, mt: 4 }}>
                        Our Trusted Maids
                    </Typography>
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
                                <Typography variant="body1">Salart: {maid.salary}</Typography>
                                <Typography variant="body1">City: {maid.city}</Typography>
                                <Typography variant="body1">Experience: {maid.experience}</Typography>
                                <Typography variant="body1">Address: {maid.address}</Typography>
                                <Typography variant="body1">service: {maid.service}</Typography>
                                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 0.2 }}>Rating: {maid.rating} <Rating defaultValue={maid.rating} precision={0.1} readOnly /></Typography>
                                <Button sx={{ bgcolor: 'black', color: 'white', mt: 2 }} onClick={() => bookmaids(maid)}>Hire</Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box >


            < StoreBooking
                bookings={bookings}
                setBookings={setBookings}
                openBook={openBook}
                setOpenBook={setOpenBook}
            />

        </>
    )
}
export default Maids