"use client"
import React from 'react';
import TextField from '@mui/material/TextField';
import { login } from '../Services/UserServices';
import BookAppBar2 from './AppBar2';


const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]*$/;

function ForgotPassword({ signProps }) {
    const goToSignUp = () => {
        console.log("ready to switch")
        signProps()
    }
    const [inputData, setLInputData] = React.useState({ email: ""});
    const [errorObj, setErrorObj] = React.useState({
        emailError: false,
        emailHelper: "",
    });

    const takeEmail = (event) => {
        setLInputData((prevState) => ({ ...prevState, email: event.target.value }));
    };
    
    const resetPassword = async () => {
        let emailTest = emailRegex.test(inputData.email);

        if (emailTest === false) {
            setErrorObj((prevState) => ({
                ...prevState,
                emailError: true,
                emailHelper: "enter correct email",
            }));
        } else {
            setErrorObj((prevState) => ({
                ...prevState,
                emailError: false,
                emailHelper: "",
            }));
        }

        console.log(inputData)
        // if (emailTest === true) {
        //     let response = await login(inputData);
        //     console.log(response);
        //     localStorage.setItem("token", response.data.id);
        // }
    }
    const [show, setShow] = React.useState(true)
    return (
        <div className='w-[100vw] h-[100vh]'>
            <BookAppBar2 />
            <div className='h-[80%] w-full flex flex-col items-center justify-center relative border-2 border-slate-700 '>
                <h2 className='absolute top-12 font-bold text-2xl'>Forgot Password</h2>
                {/* rightside */}
                <div className='h-[45vh] w-[80vw]  sm:w-[40vw] flex flex-col justify-center items-center shadow-sm shadow-slate-700'>
                    <div className='h-[70%] w-full px-10 py-5'>
                        <div class="h-full w-[100%]">
                            <form class="space-y-2" action="#" method="POST">
                                {/* text  */}
                                <div className='text-sm  text-slate-600 '>Enter your email address and we'll send you a link to reset your password.</div>

                                {/* email  */}
                                <div>
                                    <label for="email" class="block text-xs font-bold leading-6 text-slate-900">Email id</label>
                                    <div>
                                        <TextField
                                            fullWidth
                                            id="fullWidth"
                                            variant="outlined"
                                            required
                                            size='small'
                                            error={errorObj.emailError}
                                            helperText={errorObj.emailHelper}
                                            onChange={takeEmail}
                                        />
                                    </div>
                                </div>

                                {/* submit  */}
                                <div>
                                    <button type="submit" class="flex w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm font-semibold leading-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={resetPassword}>Reset Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='bg-slate-200 w-full h-[30%] flex justify-center items-center font-bold' onClick={goToSignUp}>CREATE ACCOUNT</div>
                   
                </div >
            </div >
        </div >
    )
}

export default ForgotPassword
