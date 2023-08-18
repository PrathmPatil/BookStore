"use client"
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import BookAppBar from '@/Component/AppBar'
import { Grid } from '@mui/material'

function WishList() {
    return (
        <Grid className='w-[1366px] flex justify-center items-center border-2 border-slate-800 h-[100vh]' >
            <BookAppBar />
            <Box
                sx={{
                    width: '1360px',
                    heightl: '90vh',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // border:'2px solid black'
                }}
            >
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    height={33}
                    sx={{
                        display: { xs: 'none', sm: 'block' }, fontSize: '25px', fontWeight: 'bold', color: '#0A0102', letterSpacing: '-1px',
                        fontFamily: 'Roboto, sans-serif',
                    }}>
                    PLEASE LOG IN
                </Typography>
                <Typography variant="h6"
                    noWrap
                    component="div"
                    height={33}
                    sx={{ display: { xs: 'none', sm: 'block' }, fontSize: '15px', color: 'grey', mt: '4px' }} >Login to view items in your wishlist</Typography>
                <Box sx={{ height: '73px', width: '66px', mt: '38px' }} >
                    <img src="Page-1.svg" alt="Page Image" className='h-[73px] w-[66px]' />
                </Box>
                <Button
                    variant="outlined"
                    size='small'
                    sx={{
                        height: '33px', width: '127px',
                        fontSize: '12px', mt: '55px', color: '#8F2B2F', borderColor: '#8F2B2F', // Set the border 
                        '&:hover': {
                            borderColor: '#8F2B2F',
                        },
                    }}
                    href='Login'
                >
                    LOGIN/SIGNUP
                </Button>

            </Box>
        </Grid>
    )
}

export default WishList
