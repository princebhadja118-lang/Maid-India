import { Box, Button, Card, Container, Rating, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const booknow = () => {
        const islogged = localStorage.getItem('logged')

        if (islogged === 'true') {
            navigate('/maids')
        } else {
            navigate('/login')
        }
    }

    const services = [
        {
            name: "House Cleaning",
            text: "Thorough cleaning of your home.",
            img: "/src/assets/Cleaning.png"
        },
        {
            name: "Cooking",
            text: 'Meal preparation and kichen management.',
            img: "/src/assets/Cooking.png"
        },
        {
            name: "Babysitter",
            text: 'Caring for your child with love.',
            img: "/src/assets/Baby.png"
        },
        {
            name: "Elder Care",
            text: 'Support and care for the elderly.',
            img: "/src/assets/old.png"
        }
    ]

    return (
        <>
            <Box sx={{ background: "#fff8ec", }}>
                <Box sx={{ background: "linear-gradient(150deg,#FFB703,white)", color: '#023047', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 500 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: 600 }}>
                        <Typography variant='h3' fontWeight="bold">Trusted Maid Services Across India</Typography>
                        <Typography sx={{ mt: 2, fontSize: 20 }}>
                            Professional cleaning, cooking, babysitting, Elder Care & FullTime
                        </Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
                            {/* <Typography sx={{ bgcolor: 'navajowhite', p: 1, mr: 2, width: 250, borderRadius: 2, fontSize: 20, display: 'flex', justifyContent: 'center' }} variant="p"><VerifiedOutlinedIcon sx={{ fontSize: 30 }} /> Verified Maids</Typography>
                            <Typography sx={{ bgcolor: 'navajowhite', p: 1, ml: 2, borderRadius: 2, fontSize: 20, display: 'flex', justifyContent: 'center' }} variant="p"><CurrencyRupeeOutlinedIcon sx={{ fontSize: 30 }} /> Affordable</Typography>
                            <Typography sx={{ bgcolor: 'navajowhite', p: 1, mr: 2, borderRadius: 2, fontSize: 20, display: 'flex', justifyContent: 'center' }} variant="p"><TaskAltIcon sx={{ fontSize: 30 }} /> 24/7 Support</Typography> */}
                        </Box>
                        {/* <Button sx={{ mt: 5, fontSize: 22, fontWeight: 'bold', color: '#fff', bgcolor: '#000', borderRadius: 10, height: 60, width: 300, "&:hover": { background: "black", color: 'white' } }} onClick={booknow}>Book Now</Button> */}
                    </Box>
                    <img src='/src/assets/HomeMaidPhoto.jpg' style={{ height: 500 }} alt='Home Main' />
                </Box>
                <Container sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 5 }}>
                    <Typography variant="h4" fontWeight='bold' mb={4}>
                        Our Services
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        {services.map((s) => (
                            <Card sx={{ p: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: "center", borderRadius: 4, boxShadow: 4, width: 250 }}>
                                <img src={s.img} width="100" className='flex justify-center' />
                                <Typography variant='h5' fontWeight='bold' mt={1}>{s.name}</Typography>
                                <Typography variant="body1" mt={1}>{s.text}</Typography>
                            </Card>
                        ))}
                    </Box>
                    <Button onClick={() => navigate('/services')} sx={{ width: 210, bgcolor: '#fb8500', color: 'white', borderRadius: 10, fontWeight: 'bold', boxShadow: 4, m: 3 }}>
                        View All Services &gt;
                    </Button>
                </Container>
                <Container sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 5 }}>
                    <Typography variant="h4" fontWeight='bold' mb={4}>Why Choice Us </Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Card sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 2, fontWeight: 'bold' }}>
                                <img src='/src/assets/verification.png' className={'h-10 w-10 bgcolor-white'} />
                                Verified <br /> Maids
                            </Typography>
                            <Typography variant="body1" sx={{ pt: 1 }}>All our maids are thoroughly vetted and verified.</Typography>
                        </Card>
                        <Card sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 2, fontWeight: 'bold' }}>
                                <img src='/src/assets/Ruppy.png' className={'h-10 w-10 bgcolor-white'} />
                                Affordable Pricing
                            </Typography>
                            <Typography variant="body1" sx={{ pt: 1 }}>Quality services at prices that fit your budget. </Typography>
                        </Card>
                        <Card sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 2, fontWeight: 'bold' }}>
                                <img src='/src/assets/daily.png' className={'h-10 w-10 bgcolor-white'} />
                                <Box>
                                    24/7 Support
                                    <Rating defaultValue={5} readOnly size='small' />
                                </Box>
                            </Typography>
                            <Typography variant="body1" sx={{ pt: 1 }}>Round-the-clock dedicated customer support.</Typography>
                        </Card>
                        <Card sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold' }}>
                                <img src='/src/assets/bgcheked.png' className={'h-15 w-15 bgcolor-white'} />
                                Background Checked
                            </Typography>
                            <Typography variant="body1" sx={{ pt: 1 }}>Comprehensive background checked for all staf.</Typography>
                        </Card>
                    </Box>
                    <Button onClick={() => navigate('/services')} sx={{ width: 210, bgcolor: 'orange', color: 'white', borderRadius: 10, fontWeight: 'bold', boxShadow: 4, m: 3 }}>
                        View All Services &gt;
                    </Button>
                </Container>
                <Container sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', pt: 5 }}>
                    <Typography variant="h4" fontWeight='bold'>Meet Our Trusted Maids</Typography>

                    <Box>

                    </Box>
                    <Button onClick={() => navigate('/maids')} sx={{ width: 210, bgcolor: '#fb8500', color: 'white', borderRadius: 10, fontWeight: 'bold', boxShadow: 4, m: 3 }}>
                        View All Maids &gt;
                    </Button>
                </Container>
            </Box >
        </>
    )
}

export default Home