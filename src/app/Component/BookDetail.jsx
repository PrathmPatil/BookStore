import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { getCartItems, addCartItem } from '../../Services/DataServices'
import BookAppBar from './AppBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import BookCartQuantity from '../BookCartQuantity/BookCartQuantity';

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(0),
}));


function BookDetails({ setToggle, bookInfo }) {
    const [addToBagToggle, setAddToBagToggle] = useState(true)
    const [bookObj, setBookObj] = useState({})

    const getCartItemsAndUpdte = async () => {

        let response = await getCartItems()
        console.log(bookInfo._id)

        for (let i = 0; i < response.data.result.length; i++) {
            if (response.data.result[i]?.product_id._id === bookInfo._id) {
                let itemNo = response.data.result[i].quantityToBuy
                console.log(itemNo)
                setBookObj(response.data.result[i])
                setAddToBagToggle(false)

            }

        }
    }
    const addToCart = async (bookId) => {
        let response = await addCartItem(bookId)
        // console.log(response)
        await getCartItemsAndUpdte()
        return response
    }

    useEffect(() => {
        getCartItemsAndUpdte()
    }, [])

    return (
        <Grid container className='relative w-full h-full flex justify-center flex'  >
            <BookAppBar />
            <Grid item className='h-[6vh] w-[72%] absolute top-[62px] flex justify-start items-center'  >
                <div id='home1' onClick={() => setToggle(true)}>Home/ </div>
                <div> Book</div>
            </Grid>
            <Grid item container className='h-[80vh] flex justify-between absolute top-[100px]' xs={12} lg={8.5}  >
                {/* book image  */}
                <Item className='w-[23%] h-[65%]'
                    xs={12} sm={6} md={4} lg={3}
                >
                    {/* image and button */}
                    <div className='w-full'>
                        {/* image  */}
                        <div className='w-full h-[44vh] border-2 border-slate-300 p-3' >
                            <img src="https://archive.org/download/2019-Don-t-Make-Me-Think-Revisited/0321965515.jpg" alt=""
                                className='h-[250px] w-[200px]' />
                        </div>
                        {/* buttons */}
                        <div className='w-full mt-3 h-8 flex justify-between items-center'>
                            {
                                addToBagToggle ? <button className='flex justify-around items-center h-[90%] w-[40%] bg-red-900 text-white text-xs' onClick={() => { addToCart(bookInfo._id); setAddToBagToggle(false) }}> ADD TO BAG</button> : <BookCartQuantity setAddToBagToggle={setAddToBagToggle} bookObj={bookObj} getCartItemsAndUpdte={getCartItemsAndUpdte} />
                            }
                            <button className='flex justify-around items-center h-[90%] w-[40%] bg-slate-800 text-white text-xs' id='BookDetailsGridItemBTN2'><FavoriteBorderOutlinedIcon /> WISHLIST</button>
                        </div>
                    </div>

                </Item>
                {/* book title  */}
                <Item className='flex w-[70%] flex-col' xs={12} sm={6} md={4} lg={3} >
                    <div className='flex flex-col w-[100%]'>
                        <Typography className='flex w-[60%] '>
                            {/* <div>{bookInfo?.bookName}</div> */}
                            <div className='text-2xl font-bold'>Dont make me think </div>
                        </Typography>
                        <Typography className='flex justify-start items-start w-[60%] ' >
                            {/* <div >{bookInfo?.author}</div> */}
                            <div className='text-sm text-slate-400'>By steve krug</div>
                        </Typography>
                        <Typography className='flex justify-start items-center w-[60%]'>
                            <div className='flex justify-center items-center w-[55px] text-sm bg-green-800 text-white'>3<StarOutlinedIcon id="rtstr" fontSize='small' /></div>
                            <div className='flex justify-center items-center text-sm'>(20)</div>
                        </Typography>
                        <Typography className='flex w-[20%] justify-between items-center'>
                            <div className='text-xl font-bold text-slate-700'>Rs.
                                {/* {bookInfo?.discountPrice} */}
                                1500
                            </div>
                            <div className='text-sm text-slate-600 line-through'>Rs.
                                {/* {bookInfo?.price} */}
                                1700
                            </div>
                        </Typography>
                    </div>
                    {/* Book Details  */}
                    <div className='flex flex-col justify-between items-start w-[95%] py-2'>
                        <li className='text-sm text-slate-400'>Book Details</li>
                        <p className='text-xs text-slate-800'>A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. </p>
                    </div>
                    {/* Customer Feedback  */}
                    <div className='w-[95%]'>
                        <div className='text-lg font-bold'>Customer Feedback</div>
                        <div className='p-1 bg-slate-200 rounded-sm flex flex-col justify-center'>
                            <p className='text-sm font-bold'>Overall rating</p>
                            <div ><StarBorderPurple500OutlinedIcon fontSize='small' /><StarBorderPurple500OutlinedIcon fontSize='small' /><StarBorderPurple500OutlinedIcon fontSize='small' /><StarBorderPurple500OutlinedIcon fontSize='small' /><StarBorderPurple500OutlinedIcon fontSize='small' /></div>
                            <input type="text" placeholder='write your review' className='h-10 border-none my-1' />
                            <div className='w-full flex justify-end '>
                                <button className='bg-green-700 text-white text-sm p-1'>Submit</button>
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <div className='mx-2'><AccountCircleIcon /></div>
                                <div className='text-sm'>Prathmesh Patil</div>
                            </div>
                            <div >
                                <StarOutlinedIcon id="star" fontSize='small' /><StarOutlinedIcon id="star" fontSize='small' /><StarOutlinedIcon id="star" fontSize='small' /><StarBorderPurple500OutlinedIcon fontSize='small' /><StarBorderPurple500OutlinedIcon fontSize='small' />
                            </div>
                            <div className='text-xs text-slate-400'>According to the Goodreads system, three stars means “I liked it” and that's exactly how I feel. In every book that I have rated three stars, it </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <div className='mx-2'><AccountCircleIcon /></div>
                                <div className='text-sm'>Shubham Chaudhari</div>
                            </div>
                            <div >
                                <StarOutlinedIcon id="star" fontSize='small' /><StarOutlinedIcon id="star" fontSize='small' /><StarOutlinedIcon id="star" fontSize='small' /><StarBorderPurple500OutlinedIcon fontSize='small' /><StarBorderPurple500OutlinedIcon fontSize='small' />
                            </div>
                            <div className='text-xs text-slate-400'>According to the Goodreads system, three stars means “I liked it” and that's exactly how I feel. In every book that I have rated three stars, it still meant that overall I enjoyed reading the book. </div>
                        </div>
                    </div>
                </Item>
            </Grid>
        </Grid >
    )
}

export default BookDetails