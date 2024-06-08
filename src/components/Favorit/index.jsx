import React, { useContext, useEffect } from 'react';
import { SportShop } from '../../pages/context/useContext';
import FavCart from '../FavoritCart/';

const Favorit = () => {
    const {favorit} = useContext(SportShop)
   
    return (
        <div id="favCart">
        <div className="container">
            <div className="flex pt-[50px]">
        <div className='flex items-start content-center gap-[20px] flex-wrap'>
            {
                favorit.map((el) => <FavCart el={el}/>)
            }
        </div>
            </div>
        </div>
    </div>
    );
};

export default Favorit;