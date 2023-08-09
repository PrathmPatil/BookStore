import React from 'react'
import { Box, Button, Typography } from '@mui/material'

function WhiteList() {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '90vh',
                backgroundColor: '#ffffff',
                // '&:hover': {
                //     backgroundColor: '#fafafa',
                //     opacity: [0.9, 0.8, 0.7],
                // },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Typography
                variant="h6"
                noWrap
                component="div"
                height={33}
                sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '25px', fontWeight: 'bold', color: '#0A0102',letterSpacing: '-1px',
                fontFamily: 'Roboto, sans-serif', 
            }}
                
            >
                PLEASE LOG IN
            </Typography>
            <Typography variant="h6"
                noWrap
                component="div"
                height={33}
                sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '15px', color: '#9D9D9D',mt:'4px' }} >Login to view items in your wishlist</Typography>
            <Box sx={{ height: '73px', width: '66px', mt: '38px' }} >
                <img src="Page-1.svg" alt="Page Image" />
            </Box>
            <Button
                variant="outlined"
                size='small'
                sx={{
                    fontSize: 10,  mt: '55px', color: '#8F2B2F', borderColor: '#8F2B2F', // Set the border 
                    '&:hover': {
                        borderColor: '#8F2B2F',
                      },
                }}
                href='Login'
            >
                LOGIN/SIGNUP
            </Button>

        </Box>
    )
}

export default WhiteList
