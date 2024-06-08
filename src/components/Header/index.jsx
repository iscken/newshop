import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SportShop } from '../../pages/context/useContext';
// import favorit from '../Favorit';

const Header = ({setValue}) => {
  let nav = useNavigate()
  const {basket, favorit} = useContext(SportShop)
    return (
        <div id="header">
            <div className="w-[1340px] m-0 m-auto bg-red">
                <div className="header">
                <nav className=" border-gray-200 dark:bg-gray-900 bg-bottom-[2px]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
 <div className="logoHead">
 <Link to="/Main" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark: text-white">SportShop</span>
  </Link>
 </div>
  <div classNameName="flex md:order-2">
    <button  type="button" dataCollapseToggle="navbar-search" aria-controls="navbar-search" ariaxpanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg classNameName="w-5 h-5" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input onKeyDown={(e) =>{
        if(e.key === "Enter"){
          nav("/Search")
        }
      }} onChange={(e) => setValue(e.target.value)} type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" placeholder="Search..."/>
    </div>
  
  </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      <ul className="uli">
        <div className='favblock'>
           {
             favorit.length ? <span className='favspan'>{favorit.length}</span> : null                                                      
           }
          <Link to="/favorit" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" ariaCurrent="page">Favorit</Link>
        </div>
        <div>
          {
            basket.length  ? <span className='basspan'>{basket.length}</span> : null
          }  
          <Link to="/basket" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Basket</Link>
        </div>
        
            <div>
            
            <Link to="/Modal" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Admin</Link>
            </div>
        
      </ul>
    </div>
  </div>
</nav>
                </div>
            </div>
        </div>

    );
};

export default Header;