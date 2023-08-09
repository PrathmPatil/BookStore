"use client"
import React from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import { login } from '@/Services/UserServices';


const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]*$/;
const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

function Login({ signProps }) {
  const goToSignUp = () => {
    console.log("ready to switch")
    signProps()
}
  const [inputData, setLInputData] = React.useState({ email: "", password: "" });
  const [errorObj, setErrorObj] = React.useState({
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  const takeEmail = (event) => {
    setLInputData((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const takePassword = (event) => {
    setLInputData((prevState) => ({ ...prevState, password: event.target.value }));
  };
  const submit = async () => {
    let emailTest = emailRegex.test(inputData.email);
    let passwordTest = passwordRegex.test(inputData.password);

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

    if (passwordTest === false) {
      setErrorObj((prevState) => ({
        ...prevState,
        passwordError: true,
        passwordHelper: "enter correct password",
      }));
    } else {
      setErrorObj((prevState) => ({
        ...prevState,
        passwordError: false,
        passwordHelper: "",
      }));
    }
console.log(inputData)
    if (emailTest === true && passwordTest === true) {
      let response = await login(inputData);
      console.log(response);
      localStorage.setItem("token", response.data.id);

      // localStorage.setItem("token", response.data.result.accessToken);
       // Check if a token is present in local storage
       const token = localStorage.getItem('token');
       console.log(token)
       if (token) {
         // Display an alert
         alert('You have log in successfully! .');
         // Redirect to the login page
       }

    }
  }
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
          <div className='h-[12%] w-[100%] flex  justify-between items-center sm:mx-auto sm:w-full sm:max-w-sm '>
            {/* login  */}
            <div className='h-full  flex flex-col justify-center items-center '>
              <h2 class="text-center text-2xl font-bold leading-2 tracking-tight text-gray-900">LOGIN</h2>
              <div className='w-5 border-2 border-red-900 rounded-md '></div>
            </div>
            {/* signup  */}
            <a className='h-full w-[40%]  flex justify-center items-center' onClick={goToSignUp}  href='SignUp'>
              <h2 class="text-center text-2xl  font-bold leading-2 tracking-tight text-gray-900">SIGNUP</h2>
            </a>
          </div>
          {/* tailwind */}
          <div class=" h-[80%] w-[100%]">
            <form class="space-y-2" action="#" method="POST">
              {/* email  */}
              <div>
                <label for="email" class="block text-xs font-medium leading-6 text-gray-900">Email address</label>
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
              {/* password  */}
              <div >
                <div class="flex items-center">
                  <label for="password" class="block text-xs font-medium leading-2 text-gray-900">Password</label>
                </div>
                <div className="top-0">
                  <OutlinedInput
                    fullWidth
                    size='small'
                    onChange={takePassword}
                    error={errorObj.passwordError}
                    helpertext={errorObj.passwordHelper}
                    type={show ? 'password':'text'}
                    endAdornment={
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShow(prevShow => !prevShow)} // Corrected here
                        edge="end"
                      >
                        {show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    }
                  />


                  <div className="text-xs flex justify-end">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div>
                </div>

              </div>
              {/* submit  */}
              <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm font-semibold leading-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={submit}>Login</button>
              </div>
              {/* or */}
              <div className='h-14 w-full  flex justify-between items-center '>
                <div className='ml-4 w-1/3 h-1 border-2 border-slate-200'></div>
                <h2>OR</h2>
                <div className='mr-4 w-1/3 h-1 border-2 border-slate-200'></div>
              </div>

              {/* button  */}
              <div className='h-[6vh] w-[100%] flex justify-between 
                  items-center sm:mx-auto sm:w-full sm:max-w-sm '>
                {/* login  */}
                <button className='border-none h-full w-[48%] rounded-md bg-indigo-600 border-2 border-yellow-400 flex justify-center items-center '>
                  <h2 class="text-center text-sm text-white leading-9 tracking-tight text-gray-900">Facebook</h2>
                </button>
                {/* signup  */}
                <button className='h-full w-[48%] rounded-md flex justify-center items-center bg-slate-200 '>
                  <h2 class="text-center text-  leading-9 tracking-tight text-gray-900">Google</h2>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
