"use client"
import React from 'react'
import Link from 'next/link';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import BookAppBar from '@/Component/AppBar';
import Footer from '@/Component/Footer';




const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0),
}));

function OrderPlaced() {
    return (
        <Grid container className='flex flex-col justify-center items-center' >
            <Item className='w-full'>
                {/* <BookAppBar /> */}
            </Item>
            <Item className='flex h-[30vh] justify-center items-end  w-full' xs={12} sm={6} md={4} lg={3}>
                <img className='h-[25vh] w-[20vw]' src='https://github.com/Shubham20006/BookStore_Project_ReactJs/blob/master/src/Component/OrderPlaced/orderplaced.png?raw=truez' alt="" />
            </Item>
            <Item className='flex justify-center items-center w-1/2' xs={12} sm={6} md={4} lg={3}>
                <div className='text-center w-[400px] mb-10 text-sm'>
                    hurray!!! your order is confirmed <br/> the order id is #123456 save the order id for <br/> further communication..
                </div>
            </Item>
            <Grid sx={{ display: 'flex', flexDirection: 'column' }} className='w-full flex flex-col justify-center items-center'>
                <Item className='flex justify-center items-end h-[20vh] w-[50%]' xs={12} sm={6} md={4} lg={3}>
                    <table className='h-full table-fixed'>
                        <tr className='h-[40px] bg-slate-200'>
                            <th className='text-sm'>  Email Us</th>
                            <th className='text-sm'>Contact Us</th>
                            <th className='text-sm'> Address</th>
                        </tr>
                        <tr className='text-xs ' >
                            <td className='border p-4'> admin@bookstore.com</td>
                            <td className='border p-4'>+918163475881</td>
                            <td className='border p-4'>
                                42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSRLayout, Bangalore 560034
                            </td>
                        </tr>
                    </table>
                </Item>
                <Item className='flex justify-center items-center h-[14vh] w-1/2 text-sm mb-5' xs={12} sm={6} md={4} lg={3}>
                    <Link href="/Dashboard">
                    <button className='bg-blue-600 text-white h-[35px] w-[200px] border-none rounded-sm pointer'>CONTINUE SHOPPING</button>
                    </Link>

                </Item>
            </Grid>
            <Footer />
        </Grid>
    )
}

export default OrderPlaced
