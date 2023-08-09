import BookAppBar from '../Component/AppBar'
import Footer from '../Component/Footer'
import WhiteList from '../Component/WhiteList'
import React from 'react'
import Book from '../Component/Books'
import BookAppBar2 from '../Component/AppBar2'
import ForgotPassword from '../Component/ForgotPassword'
import BookDetails from '../Component/BookDetail'
import BookCartQuantity from '../Component/BookCardQuantity'
import AddressDetail from '../Component/BookOrder/AddressDetails'
import MyCartData from '../Component/BookOrder/MyCardData'
import OrderSummary from '../Component/BookOrder/OrderSummry'
function Dashboard() {
  return (
    <div className='h-screen w-screen'>
      {/* <BookAppBar/> */}
      {/* <WhiteList/> */}
      {/* <BookAppBar2/> */}
      {/* <Book/> */}
      {/* <ForgotPassword/> */}
      {/* <BookDetails/> */}
      {/* <BookCartQuantity/> */}
      {/* <MyCart/> */}
      {/* <AddressDetail/> */}
      {/* <MyCartData/> */}
      <OrderSummary/>
      {/* <Footer/> */}
    </div>
  )
}

export default Dashboard
