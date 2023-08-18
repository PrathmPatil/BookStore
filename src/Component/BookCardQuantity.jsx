"use client"
import React from 'react'
import { removeCartItem, modifyCartItem} from '../Services/DataServices'
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
        console.log(response)
        getCartItemsAndUpdte()
    };

    const removeItem = async () => {
        console.log(bookObj._id)
        let response = await removeCartItem(bookObj._id)
        setAddToBagToggle(true)
        console.log(response)
    }

    return (

        <div className='flex justify-around items-center w-[110px] h-[35px]'>
            <RemoveCircleIcon className='text-slate-500' onClick={() => { calculateQuantity("Minus") }}/>
            <div className='flex items-center justify-center w-[40%] h-[75%] text-sm bg-slate-100  border-2 border-slate-400' >
                {bookObj.quantityToBuy}
                </div>
            <AddCircleIcon className='text-slate-500' onClick={() => { calculateQuantity("Plus") }}/>
        </div>

    )
}

export default BookCartQuantity