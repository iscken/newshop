import React, { useContext } from 'react';
import { SportShop } from '../../pages/context/useContext';
import { useNavigate } from 'react-router-dom';
import SearchCart from '../../SerchCart';

const Search = ({value}) => {
    let nav = useNavigate()
const {productmain} = useContext(SportShop)
const filtSearch = productmain.filter((el) => el.title.toLowerCase().includes(value.toLowerCase()))
    return (
        <div className='search'>
            <div className="container">
                <div className="flex  flex-wrap gap-[40px]">
                {
                value.length !== 0 ?
                filtSearch.map((el) => <SearchCart el = {el}/>) :
                nav("/main")

            }
                </div>
            </div>
           
        </div>
    );
};

export default Search;