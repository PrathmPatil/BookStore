import React from 'react'
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import BookCartQuantity from '../BookCardQuantity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0),
}));

function MyCartData({ getMyCartItem, cartInfo, cartItem }) {
    console.log("hello" + cartInfo)
    const bookdata = cartInfo

    return (
        <Grid container className='flex justify-start items-start p-[10px] pb-10 border-2 border-slate-900'>
            <Item className='w-full h-20 flex justify-between items-center '>
                <Typography sx={{fontSize:'25px', color:'black',fontWeight:'700'}} className='text-xl text-slate-800'>
                    My cart (21)
                </Typography>
                <button className='h-1/2  flex justify-between items-center shadow-sm shadow-slate-700'>
                    <LocationOnIcon className='text-red-800'/>
                    Use Current Location 
                    <ArrowDropDownIcon className='text-slate-300'/>
                </button>
            </Item>

            <Item className='w-[60px] h-[75px] ' xs={12} sm={6} md={4} lg={3}>
                <img src="https://archive.org/download/2019-Don-t-Make-Me-Think-Revisited/0321965515.jpg" alt="" />
            </Item>
            <Item className='flex flex-col justify-between items-start w-[60%] ml-10  text-sm ' xs={12} sm={6} md={4} lg={3}>
                <Typography>
                    <div className='w-full flex justify-start text-xl font-medium'>
                        {/* {bookdata?.bookName} */}
                        Dont make me think
                    </div>
                </Typography>
                <Typography>
                    <div className='w-[150px] flex justify-start text-slate-500'>
                        {/* {bookdata?.author} */}
                        Steve Krug
                    </div>
                </Typography>
                <Typography className='flex justify-between items-center  top-[6px]'>
                    <div id='MyCartdiscountbox'>Rs.
                        {/* {bookdata?.discountPrice} */}
                        1200
                    </div>
                    <div className='w-full line-through  left-4 text-sm text-slate-400'>Rs.
                        {/* {bookdata?.price} */}
                        1700
                    </div>
                </Typography>
                <div className=" top-4 flex justify-between items-center  w-[15vw] text-sm">
                    <div><BookCartQuantity bookObj={cartItem} getCartItemsAndUpdte={getMyCartItem} /></div>
                    <div>Remove</div>
                </div>
            </Item>
        </Grid >
    )
}

export default MyCartData