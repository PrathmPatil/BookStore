"use client"
import React, { useEffect, useState } from 'react'
import { getBooks } from '../Services/DataServices';
import BookCart from './BookCard';

import { Grid, Box, AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from './Footer';
import Pagination from '@mui/material/Pagination';
import BookAppBar from './AppBar';
import BookDetails from './BookDetail';


const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));

function Book() {

    const [book, setbook] = useState([])
    const [toggle, setToggle] = useState(true)
    const [bookInfo, setBookInfo] = useState()
    const [booksCount, setBooksCount] = useState(0)
    const [numOfPages, setNumOfPages] = useState(0)
    const [bookLimit, setBookLimit] = useState(8)
    const [searchBook, setSearchBook] = useState("");
    const [filterData, setFilterData] = useState(false);
    const [filterToggle, setFilterToggle] = useState(false);

    const loaddata = async () => {
        let response = await getBooks()
        let arr = response.data.result;
        setBooksCount(arr.length)
        let num = Math.ceil(arr?.length / 8);
        setNumOfPages(num)
        setbook(arr.slice(0, bookLimit))
    }
    const setPage = async (event, pagenum) => {
        let response = await getBooks()
        // console.log(response)
        let arr = response.data.result
        setbook(arr.slice(bookLimit * (pagenum - 1), bookLimit * pagenum))
    }

    useEffect(() => {
        loaddata()
    }, [])

    //Search Item
    useEffect(() => {
        setFilterData(
            book.filter(
                (bookObject) =>
                    bookObject.author.toLowerCase().includes(searchBook.toLowerCase()) ||
                    bookObject.bookName.toLowerCase().includes(searchBook.toLowerCase())
            )
        );
        if (searchBook.length !== 0) {
            setFilterToggle(true);
        } else {
            setFilterToggle(false);
            loaddata()
        }
        // console.log(filterData);
    }, [searchBook]);

    const bookData = (data) => {
        setBookInfo(data)
    }
    return (
        <Grid sx={{ display: 'flex', flexDirection: 'column' }} className='w-[1345px] items-center' >

            {/* <Item className='w-[100%]' xs={12} sm={6} md={4} lg={3}>
                <BookAppBar setSearchBook={setSearchBook} />
            </Item> */}
            <Item className='w-[70%] mt-[80px]'>

                {
                    toggle ?
                        <div className=' w-full h-[80%] flex flex-col items-center'>
                            <div className='h-[33px] w-full flex justify-between items-center'>
                                <div className='flex justify-between items-center w-42'>
                                    <h2 className='font-bold text-[25px] flex items-bottom text-slate-800'>Books </h2>
                                    <p className='text-[12px] h-[16px] text-slate-400'> ({booksCount} items)</p>
                                </div>
                                <button className='h-[80%] w-32 flex justify-center items-center shadow-sm shadow-slate-500'>sort by relevance</button>
                            </div>
                            <div className='flex flex-col justify-between items-center items-start  mt-[10px]'>
                                <Grid className='grid' container spacing={2}  >

                                    {
                                        filterToggle ? filterData.map((bookobj) => (<BookCart setToggle={setToggle} bookData={bookData} bookobj={bookobj} />))
                                            : book.map((bookobj) => (<BookCart setToggle={setToggle} bookData={bookData} bookobj={bookobj} />))
                                    }

                                </Grid>
                            </div>
                            <Item color="primary" sx={{ marginTop: '20px' }}>
                                <Pagination onChange={setPage} color='primary' count={numOfPages} />
                            </Item>
                        </div> :
                        <BookDetails setToggle={setToggle} bookInfo={bookInfo} />
                }
            </Item>
            {/* <Item sx={{ width: '100%' }} xs={12} sm={6} md={4} lg={3}>
                <Footer />
            </Item> */}
        </Grid>
    )
}

export default Book