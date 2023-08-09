import React from 'react'
// import "./BookCartQuantity.css"
import { removeCartItem, modifyCartItem} from '../../Services/DataServices'
import AddCircleIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

function BookCartQuantity({ setAddToBagToggle, bookObj, getCartItemsAndUpdte }) {

    const calculateQuantity = async (props) => {
        let count
        if (props === 'Plus') {
            count = {
                quantityToBuy: bookObj.quantityToBuy + 1,
            };

        } else {

            if (bookObj.quantityToBuy === 1) {
                removeItem()
            } else {
                count = {
                    quantityToBuy: bookObj.quantityToBuy - 1,
                };
            }
        }

        let response = await modifyCartItem(bookObj._id, count)
        //console.log(response)
        getCartItemsAndUpdte()
    };

    const removeItem = async () => {
        let response = await removeCartItem(bookObj._id)
        setAddToBagToggle(true)
        console.log(response)
    }

    return (

        <div className='flex justify-around items-center w-[110px] h-[35px] border-2 border-slate-900'>
            {/* <button className='flex items-center justify-center w-[20%] h-[60%] border-2 border-slate-900' onClick={() => { calculateQuantity("Minus") }}></button> */}
            <AddCircleIcon className='text-slate-500' onClick={() => { calculateQuantity("Minus") }}/>
            <div className='flex items-center justify-center w-[40%] h-[75%] text-sm bg-slate-200  border-2 border-slate-400' >
                {/* {bookObj.quantityToBuy} */}
                23
                </div>
            {/* <button className='flex justify-center items-center w-[20%] h-[60%] border-2 border-slate-900'  onClick={() => { calculateQuantity("Plus") }}>@</button> */}
            <RemoveCircleIcon className='text-slate-500' onClick={() => { calculateQuantity("Plus") }}/>
        </div>

    )
}

export default BookCartQuantity