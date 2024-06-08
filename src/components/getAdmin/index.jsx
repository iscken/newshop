import React from 'react';
import { Link } from 'react-router-dom';

const GetAdmin = () => {
    return (
        <div id='getadmin'>
            <div className="flex items-center justify-center my-[50px]">
                <div className="w-[400px] h-[300px] text-center gap-[20px]">
                <h1 className='text-2xl'>Озунуз кошкон продуктылардын баарын коргунуз келеби</h1>
               <button className='text-[blue]'> <Link to="/admin" className='text-3xl '>Коруу</Link></button>
                </div>
            </div>
            
        </div>
    );
};

export default GetAdmin;