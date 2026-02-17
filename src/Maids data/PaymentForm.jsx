import { Box, Button, Modal, Typography, TextField, Divider, InputLabel } from '@mui/material'
import React, { useState } from 'react'

const PaymentForm = ({ paymentForm, setPaymentForm }) => {

    const [paymnetDetails, setPaymnetDetails] = useState({
        NameonCard: '',
        CardNum: '',
        ExpDate: '',
        CVV: '',
        BilAddress: ''
    })

    const [paymentError, setPaymentError] = useState({
        NameonCard: '',
        CardNum: '',
        ExpDate: '',
        CVV: '',
        BilAddress: ''
    })

    const handlechange = (e) => {
        setPaymnetDetails({
            ...paymnetDetails,
            [e.target.name]: e.target.value
        })

    }

    const checkPayment = () => {

        const newError = {
            NameonCard: '',
            CardNum: '',
            ExpDate: '',
            CVV: '',
            BilAddress: ''
        }

        if (!paymnetDetails.NameonCard.trim()) {
            newError.NameonCard = 'Enter Name as per Card Name'
        } else if (!paymnetDetails.CardNum.trim()) {
            newError.CardNum = 'Enter Your Card Number '
        } else if (paymnetDetails.CardNum.length != 12) {
            newError.CardNum = 'Enter Valid 12 Digits Number'
        } else if (!paymnetDetails.ExpDate.trim()) {
            newError.ExpDate = 'Enter Card Expiry Date'
        } else if (paymnetDetails.ExpDate.length != 5) {
            newError.ExpDate = 'Enter Valid Date in (MM/YY) Format'
        } else if (!paymnetDetails.CVV.trim()) {
            newError.CVV = 'Enter CVV number'
        } else if (paymnetDetails.CVV.length != 4) {
            newError.CVV = 'Please Enter 4 Digit number'
        } else if (!paymnetDetails.BilAddress.trim()) {
            newError.BilAddress = 'Enter Billing Address'
        } else {
            localStorage.removeItem('bookedMaids')
            setPaymentForm(false)
        }
        setPaymentError(newError)
        setPaymnetDetails({ NameonCard: '', CardNum: '', ExpDate: '', CVV: '', BilAddress: '' })
    }

    return (
        <>
            <Modal open={paymentForm} onClose={() => setPaymentForm(false)} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ bgcolor: 'white', p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography variant="h5" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>Payment Form</Typography>
                    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                        <Box>
                            <InputLabel>Name:</InputLabel>
                            <TextField
                                placeholder='Name'
                                value={localStorage.getItem('FirstName') + " " + localStorage.getItem('LastName')}
                            />
                        </Box>
                        <Box>
                            <InputLabel>Email:</InputLabel>
                            <TextField
                                placeholder='Email'
                                type='email'
                                value={localStorage.getItem('Email')}
                            />
                        </Box>
                        <Box>
                            <InputLabel>Mobile:</InputLabel>
                            <TextField
                                placeholder='Mobile'
                                value={localStorage.getItem('Mobile')}
                            />
                        </Box>
                    </Box>
                    <Divider />
                    <Typography variant="h5">Card Details</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                        <Box>
                            <InputLabel>Name On Card</InputLabel>
                            <TextField
                                placeholder='Card Holder Name'
                                name='NameonCard'
                                value={paymnetDetails.NameonCard}
                                onChange={handlechange}
                                error={!!paymentError.NameonCard}
                                helperText={paymentError.NameonCard}
                            />
                        </Box>
                        <Box>
                            <InputLabel>Card Number</InputLabel>
                            <TextField
                                placeholder='1111-2222-3333-4444'
                                type='number'
                                name='CardNum'
                                value={paymnetDetails.CardNum}
                                onChange={handlechange}
                                error={!!paymentError.CardNum}
                                helperText={paymentError.CardNum}
                            />
                        </Box>
                        <Box>
                            <InputLabel>Expiy Date(mm/yy)</InputLabel>
                            <TextField
                                placeholder='MM/YY'
                                name='ExpDate'
                                value={paymnetDetails.ExpDate}
                                onChange={handlechange}
                                error={!!paymentError.ExpDate}
                                helperText={paymentError.ExpDate}
                            />
                        </Box>
                        <Box>
                            <InputLabel>CVV</InputLabel>
                            <TextField
                                type='password'
                                placeholder="1234"
                                name='CVV'
                                value={paymnetDetails.CVV}
                                onChange={handlechange}
                                error={!!paymentError.CVV}
                                helperText={paymentError.CVV}
                            />
                        </Box>
                        <Box>
                            <InputLabel>Billing Address</InputLabel>
                            <TextField
                                placeholder="Billing Address"
                                name='BilAddress'
                                value={paymnetDetails.BilAddress}
                                onChange={handlechange}
                                error={!!paymentError.BilAddress}
                                helperText={paymentError.BilAddress}
                            />
                        </Box>
                    </Box>
                    <Divider />
                    <Box>

                    </Box>
                    <Button sx={{ bgcolor: 'black', color: 'white' }} onClick={() => checkPayment()}>Pay Now</Button>
                </Box>
            </Modal>
        </>
    )
}

export default PaymentForm