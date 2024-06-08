import React, { useContext } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { SportShop } from '../../pages/context/useContext';

const  FavCart = ({el}) => {
    const {deltetFav} = useContext(SportShop)

    return (
       
                <div  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={el.image} alt=""/>
                     <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.price}</p>
                         <button onClick={() => deltetFav(el)} className='flex content-center pt-[100px] pl-[300px] text-[blue]'><AiOutlineDelete /></button>
                     </div>
                    </div>


    )
};

export default FavCart;