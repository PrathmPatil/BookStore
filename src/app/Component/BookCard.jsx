import React from 'react'
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';


function BookCart({ bookobj,setToggle,bookData }) {
    return (

        <Grid item container spacing={0} xs={12} sm={6} md={4} lg={3}  className=''>
            <Card className='flex flex-col items-center justify-between w-[235px] h-[190px]' onClick={()=>{setToggle(false); bookData(bookobj)}} style={{ width: 250 }}  >
                <div className='flex justify-center items-center w-[100%] h-[60%] bg-slate-200  ;'>
                    <img src="https://archive.org/download/2019-Don-t-Make-Me-Think-Revisited/0321965515.jpg" className='h-[100px] w-[80px] shadow-md shadow-#878787' alt="" />
                </div>
                <CardContent className=' flex flex-col items-center justify-center w-full h-[40%] '>
                    <Typography className='flex  h-[24px] w-[100%]  relative font-bold' gutterBottom>
                        <div className='text-md text-slate-800 font-bold top-2'>{bookobj?.bookName}</div>
                    </Typography>
                    <Typography className='flex justify-start items-center h-[14px]  w-[100%] bottom-2 relative ' >
                        <div className='text-xs text-slate-400' >{bookobj?.author}</div>
                    </Typography>
                    <Typography className='flex justify-start items-center h-[15px] w-[100%]  relative '>
                        <div className=' flex justify-center items-center h-[100%] w-[33px] text-sm bg-green-800 text-slate-100'>3
                        <StarOutlinedIcon id="rtstr1" fontSize='15px' className='left-2'/>
                        </div>
                        <div className='relative left-[2px] h-[18px] w-[13px] text-xs text-slate-400'>(20)</div>
                    </Typography>
                    <Typography className='flex justify-start items-center h-[16px] w-[100%] relative'>
                        <div className='w-[48px] h-[100%] text-sm text-slate-700 font-bold'>Rs.{bookobj?.discountPrice}</div>
                        <div className=' w-[36px] h-[13px] text-[10px] text-#878787 line-through'>Rs.{bookobj?.price}</div>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default BookCart