import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import { maiddetails } from '../Maids data/MaidDetails'
import { Badge, Box, Button, Card, CardContent, IconButton, Rating, Pagination } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import StoreBooking from '../Maids data/StoreBooking'
import BookingForm from '../Maids data/BookingForm'

const Maids = () => {

    const navigate = useNavigate()

    const [bookings, setBookings] = useState([])
    const [openDialog, setOpenDialog] = useState(false)
    const [openBookingForm, setOpenBookingForm] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const islogged = localStorage.getItem('logged')

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("bookedMaids")) || []
        setBookings(stored)
    }, [])

    const hiremaids = (maid) => {

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

        setOpenBookingForm(true)
    }

    const itemsPerPage = 8

    const lastIndex = currentPage * itemsPerPage
    const firstIndex = lastIndex - itemsPerPage

    const currentItems = maiddetails.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(maiddetails.length / itemsPerPage)

    const handleChange = (event, value) => {
        setCurrentPage(value)
    }

    return (
        <>
            <Box sx={{ bgcolor: "#FFA800" }} >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', mt: 4 }}>
                        <Typography variant="h3" sx={{ width: '95%', display: 'flex', justifyContent: 'center', p: 2 }}>
                            Our Trusted Maids
                        </Typography>
                        <IconButton
                            sx={{ bgcolor: 'white', height: 40, width: 40, ":hover": { bgcolor: 'white' } }}
                            onClick={() => setOpenDialog(true)}
                        >
                            <Badge badgeContent={islogged === 'true' ? bookings.length : 0} color='success'>
                                <AddIcon color='active' sx={{ fontSize: 30 }} />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Typography variant="body1" fontSize={20}>
                        Professional maid services for <b>your daily needs.</b>
                    </Typography>
                    <Typography variant="body1" mt={3}>
                        Home &gt; <b>Services</b>
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', maxwidth: 1200, p: 3, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', justifyContent: 'center', gap: 2 }}>
                    {currentItems.map((maid) => (
                        <Card key={maid.id} sx={{ maxWidth: 400, boxshadow: '0 10px 25px rgba(0,0,0,.15)' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                                {/* <Typography>{maid.photo}</Typography> */}
                                <Typography variant="h6" sx={{ fontWeight: 'bold', pb: 0.5 }}>Name: {maid.name}</Typography>
                                <Typography variant="body1">Age: {maid.age}</Typography>
                                <Typography variant="body1">Salary: {maid.salary}</Typography>
                                <Typography variant="body1">City: {maid.city}</Typography>
                                <Typography variant="body1">Experience: {maid.experience}</Typography>
                                <Typography variant="body1">Address: {maid.address}</Typography>
                                <Typography variant="body1">service: {maid.service}</Typography>
                                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 0.2 }}>
                                    Rating: {maid.rating} <Rating defaultValue={maid.rating} precision={0.1} readOnly />
                                </Typography>
                                <Button sx={{ bgcolor: 'black', color: 'white', mt: 2 }} onClick={() => hiremaids(maid)}>Hire</Button>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                <Box sx={{ p: 4, width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Pagination
                        count={totalPages}
                        page={currentPage}
                        onChange={handleChange}
                        size='large'
                        variant='outlined'
                        shape='rounded'
                    />
                </Box>
            </Box >


            < StoreBooking
                bookings={bookings}
                setBookings={setBookings}
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
            />

            <BookingForm
                openBookingForm={openBookingForm}
                setOpenBookingForm={setOpenBookingForm}
                setBookings={setBookings}
            />

        </>
    )
}
export default Maids