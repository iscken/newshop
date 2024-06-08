import React, { useContext, useEffect, useState } from 'react';
import { SportShop } from '../../pages/context/useContext';

const Admin = () => {
    const { admin } = useContext(SportShop)
   
    return (
       <div id="admin">
         <div className='container'>
           <div className="flex items-start  justify-center gap-[40px] flex-wrap pt-[50px]">
           {
                admin.map((el) => (
                    <div className='text-center w-[300px]'>
                   <img src={el.img} alt=""  />
                    <h1>{el.name}</h1>
                    <h4>{el.age}</h4>
                    <p>{el.number}</p>
                   </div>
                ))
            }
           </div>
        </div>
       </div>

    );
};

export default Admin;