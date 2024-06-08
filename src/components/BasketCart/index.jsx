import React, { useContext } from 'react';
import { SportShop } from '../../pages/context/useContext';

const BasketCart = ({el}) => {
    const {incriment, decriment, deleteBasket} = useContext(SportShop)

    return (
     


<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th>
                    quintity
                </th>
                
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                <img src={el.image} alt="" width={100}/>
                <td class="px-9 py-4">
                    {el.title.slice(0,9)}
                </td>
                <td class="px-9 py-4">
                <div className="btnsprice">
                <button className='btnminus' onClick={() => decriment(el)} >-</button>
                <span className='quantity'>{el.quantity }</span>
                <button className='btnplus' onClick={() => {incriment(el)} }>+</button>
                </div>
                </td>
                <td class="px-6 py-3">
                  <div className="">
                  {el.price * el.quantity} 

                  </div>
                </td>

                <td class="px-9 py-3">
                    <button onClick={() => deleteBasket(el)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">delete</button>
                </td>
            </tr>
               <div className="itogprice">
                <div className="itog"></div>
               </div>
          
        </tbody>
    </table>
</div>


    );
};

export default BasketCart;