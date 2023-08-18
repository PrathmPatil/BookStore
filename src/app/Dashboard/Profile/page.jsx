"use client"
import React, { useState } from 'react'
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BookAppBar from '@/Component/AppBar';
import Link from 'next/link';
// import { userAddress } from '../../Services/DataServices';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));

function page() {

    const [summaryToggle, setSummaryToggle] = useState(false)

    const [AdrsInt, setAdrsObj] = useState({ addressType: "", fullAddress: "", city: "", state: "" });
    const [errObj, setErrObj] = useState({
        cityError: false,
        cityHelper: "",
        stateError: false,
        stateHelper: "",
    });


    const takeAddress = (event) => {
        setAdrsObj((prev) => ({ ...prev, fullAddress: event.target.value }));

    };
    const takeCity = (event) => {
        setAdrsObj((prev) => ({ ...prev, city: event.target.value }));

    };
    const takeState = (event) => {
        setAdrsObj((prev) => ({ ...prev, state: event.target.value }));

    };
    const takeAddressType = (event) => {
        setAdrsObj((prev) => ({ ...prev, addressType: event.target.value }));

    };


    const Submit = async () => {
        let cityTest = citystate_Regex.test(AdrsInt.city);
        let stateTest = citystate_Regex.test(AdrsInt.state);

        if (cityTest === false) {
            setErrObj((prevState) => ({
                ...prevState,
                cityError: true,
                cityHelper: "Enter correct City",
            }));
        } else {
            setErrObj((prevState) => ({
                ...prevState,
                cityError: false,
                cityHelper: "",
            }));
        }

        if (stateTest === false) {
            setErrObj((prevState) => ({
                ...prevState,
                stateError: true,
                stateHelper: "Enter correct state",
            }));
        } else {
            setErrObj((prevState) => ({
                ...prevState,
                stateError: false,
                stateHelper: "",
            }));
        }
        console.log(AdrsInt)
        if (cityTest === true && stateTest === true) {
            // let response = await userAddress(AdrsInt);
            console.log(response);
        }

    };

    return (
        <Grid className='h-[1032px] w-[1345px] relative'>
            <BookAppBar />
            <Item className='flex justify-start items-center  h-[40px] ml-[180px] mt-[80px]' xs={12} sm={6} md={4} lg={3}>
                    <div >
                        <Link href="/Dashboard">
                            <span className='text-slate-400'>Home/</span>
                        </Link>
                        <span className='text-slate-900 font-bold'>MyCart</span>
                    </div>
                </Item>
            <Grid className='w-[511px] h-[340px] ml-[214px] mt-[20px] absolute'>
               
                <Item className='h-8 flex items-center' xs={12} sm={6} md={4} lg={3}>
                    <div className='text-slate-800 text-[18px] font-semibold'>Personal Details</div>
                    <div className='ml-[10px] text-red-400 text-xs'><button >Edit</button></div>
                </Item>
                <div className='w-[512px] flex flex-col space-y-[10px]'>

                    <Item xs={12} sm={6} md={4} lg={3}>
                        <label for="text" class="block text-[11px] font-medium leading-6 text-gray-900">Full Name</label>
                        <TextField
                            fullWidth
                            type={'text'}
                            variant="outlined"
                            required
                            size='small'
                        // onChange={takeFullName}
                        // error={errObj.NameError}
                        // helpertext={errObj.NameHelper}
                        />
                    </Item>
                    <Item xs={12} sm={6} md={4} lg={3}>
                        <label for="text" class="block text-[11px] font-medium leading-6 text-gray-900">Email Id</label>
                        <TextField
                            fullWidth
                            type={'email'}
                            variant="outlined"
                            required
                            size='small'
                        // onChange={takeFullName}
                        // error={errObj.NameError}
                        // helpertext={errObj.NameHelper}
                        />
                    </Item>
                    <Item xs={12} sm={6} md={4} lg={3}>
                        <label for="text" class="block text-[11px] font-medium leading-6 text-gray-900">Password</label>
                        <TextField
                            fullWidth
                            type={'password'}
                            variant="outlined"
                            required
                            size='small'
                        // onChange={takeFullName}
                        // error={errObj.NameError}
                        // helpertext={errObj.NameHelper}
                        />
                    </Item>
                    <Item xs={12} sm={6} md={4} lg={3}>
                        <label for="text" class="block text-[11px] font-medium leading-6 text-gray-900">Mobile Number</label>
                        <TextField
                            fullWidth
                            type={'tel'}
                            variant="outlined"
                            required
                            size='small'
                        // onChange={takeFullName}
                        // error={errObj.NameError}
                        // helpertext={errObj.NameHelper}
                        />
                    </Item>

                </div>
            </Grid>
            {/* Address Details  */}
            <Grid className='w-[511px] h-[340px] ml-[214px] mt-[500px] absolute'>
                <Item className='flex w-[512px] flex-col text-slate-800 space-y-[10px]' xs={12} sm={6} md={4} lg={3}>
                    <Item className='w-[512px] flex justify-between items-start h-8 ' xs={12} sm={6} md={4} lg={3}>
                        <div className='text-slate-800 text-[18px] font-semibold'>Address Details</div>
                        <div className='h-[29px] w-[123px] flex justify-center items-center shadow-sm  shadow-red-400 text-red-400 text-xs rounded-sm '><button >Add New Address</button></div>
                    </Item>
                    <Item className='h-8  flex items-center' xs={12} sm={6} md={4} lg={3}>
                        <div className='text-slate-800 text-[15px] font-semibold'>1.WORK</div>
                        <div className='ml-[10px] text-red-400 text-xs'><button >Edit</button></div>
                    </Item>
                    <Item className='flex w-full flex-col items-center text-slate-800' xs={12} sm={6} md={4} lg={3}>
                        <label for="text" class="w-[512px]  text-[11px] font-medium leading-6 text-gray-900">Address </label>
                        <TextField
                            fullWidth
                            type={'text'}
                            variant="outlined"
                            required
                            size='large'
                        // onChange={takeFullName}
                        // error={errObj.NameError}
                        // helpertext={errObj.NameHelper}
                        />
                    </Item>
                    <Grid container className='flex w-full justify-between items-center text-slate-800 py-2 ' >
                        <Item xs={12} sm={6} md={4} lg={3}>
                            <label for="text" class="w-[48%] block text-[11px] font-medium leading-6 text-gray-900">City/town</label>
                            <TextField
                                style={{ width: '255px' }}
                                type={'text'}
                                variant="outlined"
                                required
                                size='small'
                            // onChange={takeFullName}
                            // error={errObj.NameError}
                            // helpertext={errObj.NameHelper}
                            />
                        </Item>
                        <Item xs={12} sm={6} md={4} lg={3}>
                            <label for="text" class="block text-[11px] font-medium leading-6 text-gray-900">State</label>
                            <TextField
                                style={{ width: '255px' }}
                                type={'text'}
                                variant="outlined"
                                required
                                size='small'
                            // onChange={takeFullName}
                            // error={errObj.NameError}
                            // helpertext={errObj.NameHelper}
                            />
                        </Item>
                    </Grid>
                    {/* type */}
                    <Item className='flex w-[375px] justify-between items-center text-slate-800' xs={12} sm={6} md={4} lg={3}>
                        <FormControl className='flex flex-col w-full'>
                            <FormLabel className='text-slate-900'>Type</FormLabel>
                            <RadioGroup
                                row
                                className='flex justify-between w-full'
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={takeAddressType}
                            >
                                <FormControlLabel value="Home" control={<Radio />} label="Home" />
                                <FormControlLabel value="Office" control={<Radio />} label="Office" />
                                <FormControlLabel value="Other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Item>
                </Item>
            </Grid>
        </Grid >
    )
}

export default page
