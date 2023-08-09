import React from 'react'
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0),
}));

function OrderSummary({ cartInfo }) {
    return (
        <Grid container className='flex justify-start items-start p-4 shadow-sm shadow-slate-800'>
            <Typography sx={{fontSize:'20px',fontWeight:'600',paddingBottom:'20px'}} className='w-full'>Order Summary</Typography>
            <Item className='w-[65px] h-[85px]' xs={12} sm={6} md={4} lg={3}>
                <img  src="https://archive.org/download/2019-Don-t-Make-Me-Think-Revisited/0321965515.jpg" alt="" />
            </Item>
            <Item className='w-[60%] ml-10 flex flex-col justify-between items-start text-sm ' xs={12} sm={6} md={4} lg={3}>
                <Typography className='MyCartBooknameBox'>
                    <div className='w-[170] flex justify-start items-center text-xl font-medium text-slate-800'>
                         {/* {cartInfo?.bookName} */}
                         Dont Make Mem think
                         </div>
                </Typography>
                <Typography className='OrderSummaryAuthorNameBox' >
                    <div className='w-[170] flex justify-start items-center text-sm text-slate-400'> 
                    {/* {cartInfo?.author} */}
                    by Steve krug
                    </div>
                </Typography>
                <Typography className='w-40 flex justify-between items-center top-6'>
                    <div className='text-xl font-semibold'>Rs.
                    {/* {cartInfo?.discountPrice} */}
                    1200
                    </div>
                    <div className='text-sm text-slate-500 line-through'>Rs.
                    1500
                    {/* {cartInfo?.price} */}
                    </div>
                </Typography>
            </Item>
            <div className='w-full h-9 flex justify-end' >
                <button className='h-full w-28 bg-blue-600 flex justify-center items-center text-white text-sm rounded-sm '>CHECKOUT</button>
            </div>
        </Grid >
    )
}

export default OrderSummary