import React, { useContext, useState } from 'react';
import { SportShop } from '../../pages/context/useContext';
import MainCart from '../mainCart';

const Main = () => {
    const {productmain, SelectOption} = useContext(SportShop)
    const [moreBtn, setMoreBtn] = useState(3)
    return (
        <div id="main">
            <div className="w-[100%] text-end pr-5 pt-5">
            <select onChange={(e) => SelectOption(e.target.value)} className='border-[2px]'>
            <option value="All">All</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="0-1">0-1</option>
            <option value="1-0">1-0</option>
        </select>
            </div>
            <div className='container'>
           <div className="main">
           {
                productmain.slice(0, moreBtn).map((el , idx) => <MainCart el={el} key={idx}/>)
            }
           </div>
          <div className="w-[100%] text-center">
          <button onClick={() => setMoreBtn(moreBtn + 3)} className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'><h2>More</h2></button>
          </div>
        </div>
        </div>
    );
};

export default Main;