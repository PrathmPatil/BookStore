
import React, { useState } from 'react'
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { userAddress } from '../../../Services/DataServices';
import { Bungee_Shade } from 'next/font/google';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));


const citystate_Regex = /(^[A-Za-z]{2,})/;

function AddressDetail({ setSummaryToggle, summaryToggle }) {

    const [AdrsObj, setAdrsObj] = useState({ addressType: "", fullAddress: "", city: "", state: "" });
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
        let cityTest = citystate_Regex.test(AdrsObj.city);
        let stateTest = citystate_Regex.test(AdrsObj.state);

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
        if (cityTest === true && stateTest === true) {
            let response = await userAddress(AdrsObj);
            console.log(response);
            setSummaryToggle(true);

        }

    };


    return (
        <Grid container-fulid   className='p-[30px] w-[50vw] mx-auto shadow-sm shadow-slate-800'>
            <Item
                className='flex justify-start items-start h-8 mb-8'
                xs={12} sm={6} md={4} lg={3}>
                <div className='text-slate-800 text-xl font-semibold'>Customer Details</div>
            </Item>
            <div className='w-[70%] flex flex-col ml-6 w-[90%] '>
                <Grid container className='flex w-full justify-between items-center text-slate-800 py-2 ' >

                    <Item  xs={12} sm={6} md={4} lg={3}>

                        <TextField
                            fullWidth
                            id="fullWidth1"
                            type={'text'}
                            label="Full Name"
                            variant="outlined"
                            required
                            size='small'
                        />
                    </Item>
                    <Item xs={12} sm={6} md={4} lg={3}>

                        <TextField
                            fullWidth
                            id="fullwidth2"
                            type={'number'}
                            label="Mobile Number"
                            variant="outlined"
                            required
                            size='small'
                        />
                    </Item>


                </Grid>
                <Item className='flex w-full justify-between items-center text-slate-800' xs={12} sm={6} md={4} lg={3}>
                        <TextField
                            fullWidth
                            id="fullWidth1"
                            type={'text'}
                            label="Address"
                            variant="outlined"
                            required
                            size='large'
                            onChange={takeAddress}

                        />               
                </Item>
                <Grid container className='flex w-full justify-between items-center text-slate-800 py-2 ' >

                    <Item  xs={12} sm={6} md={4} lg={3}>

                        <TextField
                            fullWidth
                            id="fullWidth1"
                            type={'text'}
                            label="City/Town"
                            variant="outlined"
                            required
                            size='small'
                            onChange={takeCity}
                            error={errObj.cityError}
                            helperText={errObj.cityHelper}

                        />
                    </Item>
                    <Item  xs={12} sm={6} md={4} lg={3}>

                        <TextField
                            fullWidth
                            id="fullwidth2"
                            type={'text'}
                            label="State"
                            variant="outlined"
                            required
                            size='small'
                            onChange={takeState}
                            error={errObj.stateError}
                            helperText={errObj.stateHelper}
                        />
                    </Item>


                </Grid>
                {/* type */}
                <Item className='flex w-[70%] justify-between items-center text-slate-800' xs={12} sm={6} md={4} lg={3}>
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
            </div>
        </Grid>

    )
}

export default AddressDetail