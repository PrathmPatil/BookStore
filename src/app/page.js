"use client"
import BookAppBar from './Component/AppBar'
import Image from 'next/image'
import Dashboard from './Dashboard/page'
import Login from './Login/page'
import SignUp from './SignUp/page'
import OrderSign from './OrderSign/OrderSign'

export default function Home() {
  const headerConfig = {
    headers : {
        Authorization: localStorage.getItem('token')
    }
}
console.log("Token here "+ headerConfig.headers.Authorization)
  return (
    <div className='h-screen w-screen'>
      {/* <BookAppBar/>       */}
      <OrderSign/>
      {/* <Dashboard/> */}
    </div>
  )
}
