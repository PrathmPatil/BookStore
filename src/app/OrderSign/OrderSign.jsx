"use client"
import React, { useState } from 'react'
import SignUp from '../SignUp/page';
import Login from '../Login/page';
import Dashboard from '../Dashboard/page';



function OrderSign() {
    const [toggle, setToggle] = useState(true)

    const signProps=()=>{
        setToggle(false)
    }
    const loginProps = () => {
        setToggle(true)
    }
       // Check if a token is present in local storage
       const token = localStorage.getItem('token');
       console.log("token "+token)
    return (
        <div>
            { 
            !token ?(
                toggle ? <Login signProps={signProps}/>:<SignUp loginProps={loginProps}/>
                // toggle ? <LogIn checkLogin={checkLogin} /> : <SignUp checkSignup={checkSignup} />
            ):(
                <Dashboard/>
            )
            }
        </div>
    )
}

export default OrderSign