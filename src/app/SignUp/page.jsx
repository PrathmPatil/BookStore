"use client"
import React,{useEffect} from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TextField from '@mui/material/TextField';
import  OutlinedInput  from '@mui/material/OutlinedInput';
import  IconButton  from '@mui/material/IconButton';
import { signup } from '@/Services/UserServices';


const NameRegex = /^[A-Z]{1}[A-Za-z ]{2,}$/;
const EmailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]*$/;
const passRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
const mobRegex = /^[0-9]{10}$/;

function SignUp({ loginProps }) {

    const goToLogin = () => {
        console.log("ready to switch")
        loginProps()
    }

    const [signUpData, setSignupData] = React.useState({ fullName: "", email: "", password: "", phone: "" });
    const [errObj, setErrObj] = React.useState({
        NameError: false,
        NameHelper: "",
        emailError: false,
        emailHelper: "",
        passError: false,
        passHelper: "",
        phoneError: false,
        phoneHelper: "",
    });
    const takeFullName = (event) => {
        setSignupData((prev) => ({ ...prev, fullName: event.target.value }));
    };
    const takeEmail = (event) => {
        setSignupData((prev) => ({ ...prev, email: event.target.value }));

    };
    const takePass = (event) => {
        setSignupData((prev) => ({ ...prev, password: event.target.value }));

    };
    const takePhone = (event) => {
        setSignupData((prev) => ({ ...prev, phone: event.target.value }));
    };

    const Submit = async () => {
        let nameTest = NameRegex.test(signUpData.fullName);
        let emailTest = EmailRegex.test(signUpData.email);
        let passTest = passRegex.test(signUpData.password);
        let phoneTest = mobRegex.test(signUpData.phone);

        if (nameTest === false) {
            setErrObj((prevState) => ({
                ...prevState,
                NameError: true,
                NameHelper: "Enter correct Full Name",
            }));
        } else {
            setErrObj((prevState) => ({
                ...prevState,
                NameError: false,
                NameHelper: "",
            }));
        }

        if (emailTest === false) {
            setErrObj((prevState) => ({
                ...prevState,
                emailError: true,
                emailHelper: "Enter correct Email",
            }));
        } else {
            setErrObj((prevState) => ({
                ...prevState,
                emailError: false,
                emailHelper: "",
            }));
        }

        if (passTest === false) {
            setErrObj((prevState) => ({
                ...prevState,
                passError: true,
                passHelper: "Enter correct Password",
            }));
        } else {
            setErrObj((prevState) => ({
                ...prevState,
                passError: false,
                passHelper: "",
            }));
        }

        if (phoneTest === false) {
            setErrObj((prevState) => ({
                ...prevState,
                phoneError: true,
                phoneHelper: "Enter correct Mobile number",
            }));
        } else {
            setErrObj((prevState) => ({
                ...prevState,
                phoneError: false,
                phoneHelper: "",
            }));
        }


        if (nameTest === true && emailTest === true && passTest === true && phoneTest === true) {
            let response = await signup(signUpData)
            console.log(response);
        }
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [show, setShow] = React.useState(true)

    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-slate-400'>
            <div className='h-[425px] w-[727px] flex items-center  '>
                {/* leftside */}
                <div className='h-[95%]  w-[45%] bg-slate-200 rounded-l-md flex justify-center items-center'>
                    <img src="2766594.png" alt="" className='bg-transparent h-[245px] w-[245px] rounded-full' />
                </div>
                {/* rightside */}
                <div className='h-[100%] w-[55%] right-0 bg-white relative rounded-lg  px-14 py-6'>
                    {/* title  */}
                    <div className='h-[12%] w-[100%] mb-3 flex justify-between items-center sm:mx-auto sm:w-full sm:max-w-sm '>
                        {/* login  */}
                        <a className='h-full w-[40%]  flex items-center'  onClick={goToLogin} >
                            <h2 class="text-center text-2xl  font-bold leading-2 tracking-tight text-gray-900">LOGIN</h2>
                        </a>
                        {/* signup  */}
                        <div className='h-full w-[40%]  flex flex-col justify-center items-center '>
                            <h2 class="text-center text-2xl font-bold leading-2 tracking-tight text-gray-900">SIGNUP</h2>
                            <div className='w-5 border-2 border-red-900 rounded-md '></div>
                        </div>
                    </div>
                    {/* tailwind */}
                    <div class=" h-[80%] w-[95%] mt-0">
                        <form class="space-y-2" action="#" method="POST">
                            {/* firstname  */}
                            <div>
                                <label for="text" class="block text-[11px] font-medium leading-6 text-gray-900">First Name</label>
                                <div>
                                    <TextField
                                        fullWidth
                                        type={'text'}
                                        variant="outlined"
                                        required
                                        size='small'
                                        onChange={takeFullName}
                                        error={errObj.NameError}
                                        helpertext={errObj.NameHelper}
                                    />
                                    {/* <input id="firstname" name="firstname" type="text" required className="rounded-sm
                                    border-2 border-red-600
                                     w-full h-8 py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                                    <p className='text-[9px] text-red-600 font-bold'>Enter Full Name</p> */}
                                </div>
                            </div>
                            {/* password  */}
                            <div >
                                <div class="flex items-center">
                                    <label for="password" class="block text-[11px] font-medium leading-2 text-gray-900">Password</label>
                                </div>
                                <div className="top-0">
                               
                                <OutlinedInput
                                fullWidth
                                size='small'
                                onChange={takePass}
                                error={errObj.passError}
                                helpertext={errObj.passHelper}
                                type={show?'password':'text'}
                                endAdornment={
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShow(prevShow => !prevShow)}
                                        // onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                }
                            />
                                    {/* <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block  w-full h-8 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    > */}

                                        {/* <div onClick={() => setShow(!show)}> */}
                                        {/* {show ? <VisibilityOffIcon onclick={()=>setShow(!show)} /> : <VisibilityIcon onclick={()=>setShow(!show)} />} */}
                                        {/* </div> */}
                                    {/* </input> */}
                                </div>
                            </div>
                            {/* email  */}
                            <div >
                                <label for="email" class="block text-[11px] font-medium leading-6 text-gray-900">Email address</label>
                                <div class="top-0">
                                <TextField
                                fullWidth
                                type={'email'}
                                variant="outlined"
                                required
                                size='small'
                                onChange={takeEmail}
                                error={errObj.emailError}
                                helpertext={errObj.emailHelper}
                            />
                                    {/* <input id="email" name="email" type="email" autocomplete="email" required class="block w-full h-8 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> */}
                                </div>
                            </div>
                            {/* mobile  */}
                            <div >
                                <label for="number" class="block text-[11px] font-medium leading-6 text-gray-900">Mobile Number</label>
                                <div class="top-0">
                                <TextField
                                fullWidth
                                type={'tel'}
                                variant="outlined"
                                required
                                size='small'
                                onChange={takePhone}
                                error={errObj.phoneError}
                                helpertext={errObj.phoneHelper}
                            />
                                    {/* <input id="phone" name="phone" type="tel" autocomplete="phone" required class="block w-full h-8 rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" /> */}

                                </div>
                            </div>
                            {/* submit  */}
                            <div>
                                <button type="submit" class="mt-6 flex w-full justify-center rounded-sm bg-red-800 px-3 py-1.5 text-sm font-semibold leading-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={Submit}>Signup</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SignUp
